import { combineReducers } from 'redux';
import map from './map';
import apply from './apply';
import personal from './personal';
import post from './post';

const rootReducer = combineReducers({
  map,
  apply,
  personal,
  post,
});

export default rootReducer;
