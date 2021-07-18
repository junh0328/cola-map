import { all, fork } from 'redux-saga/effects';

import mapSaga from './map';
import personalSaga from './personal';

export default function* rootSaga() {
  yield all([fork(mapSaga), fork(personalSaga)]);
}
