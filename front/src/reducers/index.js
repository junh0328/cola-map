import { combineReducers } from 'redux';
import map from './map';
import apply from './apply';

const rootReducer = combineReducers({
  map,
  apply,
});

export default rootReducer;
