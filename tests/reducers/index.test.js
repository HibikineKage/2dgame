import reducers from '../../reducers/index';
import entity from '../../reducers/entity';
import score from '../../reducers/score';
import gameloop from '../../reducers/gameloop';

test('reducers returns initialState', () => {
  expect(reducers()).toEqual({
    entity: entity(),
    score: score(),
    gameloop: gameloop(),
  });
});
