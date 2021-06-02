import { combineReducers } from 'redux';
import map from './map';
import apply from './apply';
import personal from './personal';

const rootReducer = combineReducers({
  map,
  apply,
  personal,
});

export default rootReducer;
