import score from '../../reducers/score';
import { GAMETICK } from '../../actions/gameloop';

test('score returns initial state', () => {
  expect(score()).toMatchObject({
    score: 0,
  });
});

test('gametick adds score 1', () => {
  const state = score();
  state.score = 5;
  const action = {
    type: GAMETICK,
  };
  expect(score(state, action)).toMatchObject({
    score: 6,
  });
});
