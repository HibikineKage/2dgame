import { combineReducers } from 'redux';
import entity from './entity';
import score from './score';
import gameloop from './gameloop';

export default combineReducers({
  entity,
  score,
  gameloop,
});
