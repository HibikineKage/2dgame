import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { createGametick } from '../actions/gameloop';
import { FPS } from '../lib/consts';

export default function* gameloop(){
  while (true) {
    yield put(createGametick());
    yield delay(1000 / FPS);
  }
}