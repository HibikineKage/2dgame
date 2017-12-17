import { TOUCH_SCREEN } from '../actions/input';
import { GAMETICK } from '../actions/gameloop';
import { FPS } from '../lib/consts';

const DEMO = 'DEMO';
const MAIN = 'MAIN';
const RESULT = 'RESULT';

const initialState = {
  scene: DEMO,
  countdown: false,
};

export default function reducer(state = initialState, action) {
  if (typeof(action) === 'object') {
    switch(action.type) {
      case GAMETICK:
        if (state.countdown > 0) {
          const countdown = state.countdown - (1 / FPS);
          if (countdown < 0) {
            return Object.assign({}, state, {
              countdown: 0,
            });
          }
          return Object.assign({}, state, {
            countdown,
          });
        }
        return state;
            
      case TOUCH_SCREEN:
        if (state.scene === DEMO) {
          return Object.assign({}, state, {
            scene: MAIN,
            countdown: 3,
          });
        }
        return state;
        
      default:
        return state;
    }
  }
  return state;
}