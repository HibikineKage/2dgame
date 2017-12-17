import { createGametick, GAMETICK, showResult, SHOW_RESULT } from '../../actions/gameloop';

test('createGametick generates GAMETICK action', () => {
  expect(createGametick()).toEqual({
    type: GAMETICK,
  });
});

test('showResult creates SHOW_RESULT action', () => {
  expect(showResult()).toEqual({
    type: SHOW_RESULT,
  });
});
