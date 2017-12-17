import { ADD_ENTITY, DELETE_ENTITY } from '../actions/entity';
import { GAMETICK } from '../actions/gameloop';
import { addItem, removeItem } from '../lib/array-tool';

const initialState = {
  entities: []
};

function move(entity) {
  entity.x -= 0.01;
  return entity;
}

function isEntityInWindow(entity) {
  return (
    -1.5 < entity.position.x &&
    entity.position.x < 1.5 &&
    -1.5 < entity.position.y &&
    entity.position.y < 1.5
  );
}

export default function entityReducer(state = initialState, action) {
  if (typeof(action) === 'object') {
    switch (action.type) {
      case ADD_ENTITY:
        return Object.assign({}, state, {
          entities: addItem(state.entities, action.entity),
        });
      case GAMETICK:
        // オブジェクトを移動させる
        return Object.assign({}, state, {
          entities: state.entities
            .map(move)
            .filter(isEntityInWindow),
        });
      default:
        return state;
    }
  }
  return state;
}
