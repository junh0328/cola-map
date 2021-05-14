import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import FetchingMap from '../apis/FetchingMap';

import { FETCH_MAP_FAILURE, FETCH_MAP_REQUEST, FETCH_MAP_SUCCESS } from '../reducers/map';

function* fetchMap() {
  try {
    FetchingMap();
    yield put({
      type: FETCH_MAP_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: FETCH_MAP_FAILURE,
      error: err.response,
    });
  }
}

function* watchFetchMap() {
  yield takeLatest(FETCH_MAP_REQUEST, fetchMap);
}

export default function* mapSaga() {
  yield all([fork(watchFetchMap)]);
}
