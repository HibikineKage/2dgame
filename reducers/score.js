import { GAMETICK } from '../actions/gameloop';

const initialState = {
  score: 0,
};

export default function score(state = initialState, action) {
  if (typeof(action) === 'object' && action.hasOwnProperty('type')) {
    switch(action.type) {
      case GAMETICK:
        return Object.assign({}, state, {
          score: state.score + 1,
        });
      default:
        return state;
    }
  }
  return state;
}
