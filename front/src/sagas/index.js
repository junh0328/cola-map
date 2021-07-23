import axios from 'axios';
import { all, fork } from 'redux-saga/effects';

import mapSaga from './map';
import personalSaga from './personal';
import postSaga from './post';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(mapSaga), fork(personalSaga), fork(postSaga)]);
}
