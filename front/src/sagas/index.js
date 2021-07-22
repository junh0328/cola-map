import axios from 'axios';
import { all, fork } from 'redux-saga/effects';

import mapSaga from './map';
import personalSaga from './personal';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(mapSaga), fork(personalSaga)]);
}
