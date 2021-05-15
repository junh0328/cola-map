import { all, fork, put, takeLatest } from 'redux-saga/effects';
import useFetchingMap from '../apis/useFetchingMap';

import { FETCH_MAP_FAILURE, FETCH_MAP_REQUEST, FETCH_MAP_SUCCESS } from '../reducers/map';

function* fetchMap() {
  console.log(useFetchingMap);
  try {
    useFetchingMap();
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
