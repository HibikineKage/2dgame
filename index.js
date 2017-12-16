import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers/index';
import saga from './sagas/index';
import initCanvas from './lib/init-canvas';

document.onload = () => {
  const ctx = initCanvas();

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
  );
}

