import { resetScore, RESET_SCORE } from '../../actions/score';

test('resetScore creates RESET_SCORE action', () => {
  expect(resetScore()).toEqual({
    type: RESET_SCORE,
  });
});
