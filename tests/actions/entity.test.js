import {
  createPlayer,
  createFoothold,
  ADD_ENTITY,
  PLAYER,
  FOOTHOLD,
} from '../../actions/entity';

test('createPlayer returns creating player action', () => {
  expect(createPlayer()).toMatchObject({
    type: ADD_ENTITY,
    entity: {
      type: PLAYER,
    },
  });
});

test('createFoot returns creating foothold action', () => {
  expect(createFoothold(0.5)).toMatchObject({
    type: ADD_ENTITY,
    entity: {
      type: FOOTHOLD,
    },
  });
});
