import { ADD_ENTITY, DELETE_ENTITY } from '../actions/entity';
import { GAMETICK } from '../actions/gameloop';

const initialState = {
  entities: []
};

export default function entityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITY:
      return state;
    case DELETE_ENTITY:
      return state;
    case GAMETICK:
      return state;
    default:
      return state;
  }
}
