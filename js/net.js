// CITY DRIVER — tiny Supabase Realtime "broadcast" client.
// Speaks the Phoenix channel protocol Supabase Realtime uses, over a plain
// browser WebSocket, so the game needs no extra library and no server of its
// own: every player joins one public channel and broadcasts small messages.
//
//   const rt = createRealtime({ url, key, topic:'city-driver' });
//   rt.on('st', payload => ...);   rt.send('st', {...});   rt.status
//
// Reconnects with backoff; sends are dropped (not queued) while offline —
// position data is only useful fresh.

const HEARTBEAT_MS = 25000;

export function createRealtime({ url, key, topic, onStatus }){
  const handlers = new Map();
  let ws = null, status = 'off', ref = 0, joinRef = null, hb = null, retry = 0, closed = false, timer = null;
  const fullTopic = 'realtime:' + topic;

  function setStatus(s){ if(status !== s){ status = s; if(onStatus) try{ onStatus(s); }catch(_){ } } }
  function raw(msg){ if(ws && ws.readyState === 1){ try{ ws.send(JSON.stringify(msg)); return true; }catch(_){ } } return false; }

  function connect(){
    if(closed) return;
    clearTimeout(timer);
    setStatus('connecting');
    const wsUrl = url.replace(/^http/, 'ws').replace(/\/$/, '') + '/realtime/v1/websocket?apikey=' + encodeURIComponent(key) + '&vsn=1.0.0';
    try{ ws = new WebSocket(wsUrl); }catch(_){ return scheduleRetry(); }
    ws.onopen = () => {
      joinRef = String(++ref);
      raw({ topic:fullTopic, event:'phx_join', ref:joinRef, join_ref:joinRef, payload:{
        config:{ broadcast:{ ack:false, self:false }, presence:{ key:'' }, private:false },
        access_token:key,
      } });
      clearInterval(hb);
      hb = setInterval(() => raw({ topic:'phoenix', event:'heartbeat', payload:{}, ref:String(++ref) }), HEARTBEAT_MS);
    };
    ws.onmessage = ev => {
      let m; try{ m = JSON.parse(ev.data); }catch(_){ return; }
      if(m.topic !== fullTopic) return;
      if(m.event === 'phx_reply' && m.ref === joinRef){
        if(m.payload && m.payload.status === 'ok'){ retry = 0; setStatus('on'); }
        else { setStatus('error'); try{ ws.close(); }catch(_){ } }
        return;
      }
      if(m.event === 'phx_error' || m.event === 'phx_close'){ try{ ws.close(); }catch(_){ } return; }
      if(m.event === 'broadcast' && m.payload){
        const fn = handlers.get(m.payload.event);
        if(fn) try{ fn(m.payload.payload || {}); }catch(e){ console.warn('mp handler', e); }
      }
    };
    ws.onclose = () => { clearInterval(hb); hb = null; ws = null; if(!closed) scheduleRetry(); };
    ws.onerror = () => { /* onclose follows */ };
  }
  function scheduleRetry(){
    setStatus('connecting');
    const wait = Math.min(15000, 1000 * Math.pow(1.7, retry++));
    timer = setTimeout(connect, wait);
  }

  return {
    connect(){ closed = false; if(!ws) connect(); },
    close(){
      closed = true; clearTimeout(timer); clearInterval(hb);
      if(ws){ raw({ topic:fullTopic, event:'phx_leave', payload:{}, ref:String(++ref), join_ref:joinRef }); try{ ws.close(); }catch(_){ } }
      ws = null; setStatus('off');
    },
    on(event, fn){ handlers.set(event, fn); },
    send(event, payload){
      if(status !== 'on') return false;
      return raw({ topic:fullTopic, event:'broadcast', ref:String(++ref), join_ref:joinRef,
        payload:{ type:'broadcast', event, payload } });
    },
    get status(){ return status; },
  };
}
