import rootSaga from '../../sagas/index.js';
import { take, fork, join, put } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';
import { TOUCH_SCREEN } from '../../actions/input';
import { showResult } from '../../actions/gameloop';
import { resetScore } from '../../actions/score';
import gameloop from '../../sagas/gameloop';

describe('rootSaga returns game scenes', () => {
  const gen = rootSaga();
  const touchScreenValue = gen.next().value;
  test('it should wait for a user to touch a screen', () => {
    expect(touchScreenValue).toEqual(take(TOUCH_SCREEN));
  });
  
  const gameloopValue = gen.next().value;

  test('it should fork a game loop task', () => {
    expect(gameloopValue).toEqual(fork(gameloop));
  });
  
  const mockTask = createMockTask();
  
  test('it should wait stopping a game loop task', () => {
    expect(gen.next(mockTask).value).toEqual(join(mockTask));
  });

  test('it should show result', () => {
    expect(gen.next().value).toEqual(put(showResult()));
  });
  
  test('it should wait for a user to touch a screen', () => {
    expect(gen.next().value).toEqual(take(TOUCH_SCREEN));
  });
  
  test('it should reset the score', () => {
    expect(gen.next().value).toEqual(put(resetScore()));
  });
});
