import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import gameloop from '../../sagas/gameloop';
import { createGametick } from '../../actions/gameloop';
import { FPS } from '../../lib/consts';

const gen = gameloop();

test('it should create a gametick', () => {
  expect(gen.next().value).toEqual(put(createGametick()));
});

test('gameloop waits 1 tick', () => {
  expect(gen.next().value).toHaveProperty('@@redux-saga/CANCEL_PROMISE');
});
