// Landscape handling for CITY DRIVER.
// The game is designed for a phone held sideways. Two layers:
//  1. On the first tap (menu buttons) we ask for fullscreen + a real
//     landscape lock. Android Chrome honours this; iOS Safari does not.
//  2. Fallback: if a touch device is still in portrait, the whole #app is
//     rotated 90° with CSS so the game always plays landscape. The renderer
//     is sized to the rotated (swapped) dimensions via viewSize().

const isTouch = () => ('ontouchstart' in window) || (navigator.maxTouchPoints || 0) > 0;

export function initOrientation(onChange){
  let rotated = false;
  const view = { w: window.innerWidth, h: window.innerHeight };

  function apply(){
    const w = window.innerWidth, h = window.innerHeight;
    rotated = isTouch() && h > w;
    view.w = rotated ? h : w;
    view.h = rotated ? w : h;
    const body = document.body, root = document.documentElement.style;
    body.classList.toggle('force-landscape', rotated);
    body.classList.toggle('compact', view.h <= 520);
    root.setProperty('--sw', w + 'px');          // real screen width (for the rotate offset)
    root.setProperty('--app-w', view.w + 'px');  // game viewport (landscape) width
    root.setProperty('--app-h', view.h + 'px');  // game viewport (landscape) height
    if(onChange) onChange(view.w, view.h);
  }

  // must be called from a user gesture (tap). Safe to call repeatedly.
  async function goLandscape(){
    if(!isTouch()) return;
    const de = document.documentElement;
    try{
      if(!document.fullscreenElement && de.requestFullscreen) await de.requestFullscreen({ navigationUI:'hide' });
    }catch(e){ /* not allowed / unsupported (iOS) — CSS fallback covers it */ }
    try{
      if(screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape');
    }catch(e){ /* unsupported — CSS fallback covers it */ }
    apply();
  }

  window.addEventListener('resize', apply);
  window.addEventListener('orientationchange', () => setTimeout(apply, 200));
  document.addEventListener('fullscreenchange', () => setTimeout(apply, 100));
  apply();

  return {
    view,                       // live {w,h} of the landscape game viewport
    goLandscape,
    refresh: apply,
    get rotated(){ return rotated; },
  };
}
