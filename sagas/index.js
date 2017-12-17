import { take, fork, put, join } from 'redux-saga/effects';
import { TOUCH_SCREEN } from '../actions/input';
import { showResult } from '../actions/gameloop';
import { resetScore } from '../actions/score';
import gameloop from './gameloop';

export default function* rootSaga() {
  while (true) {
    yield take(TOUCH_SCREEN);
    const gameloopTask = yield fork(gameloop);
    yield join(gameloopTask);
    yield put(showResult());
    yield take(TOUCH_SCREEN);
    yield put(resetScore());
  }
}
