import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers/index';
import saga from './sagas/index';
import initCanvas from './lib/init-canvas';

window.onload = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  
  const ctx = initCanvas(store.dispatch);
  sagaMiddleware.run(saga);
}

