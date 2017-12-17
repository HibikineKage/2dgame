import entity from '../../reducers/entity';
import { createFoothold, FOOTHOLD } from '../../actions/entity';
import { createGametick } from '../../actions/gameloop';
import Vector2 from '../../lib/vector2';

test('entity returns initialState', () => {
  expect(entity()).toEqual({
    entities: []
  });
});

test('ADD_ENTITY adds a new entity', () => {
  const state = entity();
  const action = createFoothold(0.5);
  expect(entity(state, action)).toEqual({
    entities: [{
      type: FOOTHOLD,
      position: new Vector2(1, 0.5),
    }]
  });
});

test('GAMETICK moves a foothold to left', () => {
  const initialState = entity();
  const state = Object.assign(
    {},
    initialState,
    {
      entities: [{
        type: FOOTHOLD,
        position: new Vector2(0, 0.5),
      }]
    }
  );
  expect(entity(state, createGametick()).entities[0].position.x).toBeLessThan(0.5);
});

test('GAMETICK deletes a entity out of window', () => {
  const initialState = entity();
  const state = Object.assign(
    {},
    initialState,
    {
      entities: [{
        type: FOOTHOLD,
        position: new Vector2(-2, 0.5),
      }]
    }
  );
  expect(entity(state, createGametick())).toEqual({
    entities: []
  });
});
