import Vector2 from '../lib/vector2';

export const ADD_ENTITY = 'ADD_ENTITY';

export const PLAYER = 'player';
export const FOOTHOLD = 'foothold';

function addEntity(entity) {
  return {
    type: ADD_ENTITY,
    entity,
  };
}

export function createPlayer() {
  return addEntity({
    type: PLAYER,
    position: new Vector2(-1, 0),
  });
}

export function createFoothold(height) {
  return addEntity({
    type: FOOTHOLD,
    position: new Vector2(1, height),
  });
}
