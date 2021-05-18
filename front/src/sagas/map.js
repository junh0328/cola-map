import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import useFetchingMap from '../apis/useFetchingMap';

import {
  FETCH_MAP_FAILURE,
  FETCH_MAP_REQUEST,
  FETCH_MAP_SUCCESS,
  FETCH_ADDRESS_REQUEST,
  FETCH_ADDRESS_SUCCESS,
  FETCH_ADDRESS_FAILURE,
} from '../reducers/map';

async function useFetchingMapAPI() {
  try {
    return await useFetchingMap();
  } catch (error) {
    console.log(error);
  }
}

function* fetchMap() {
  try {
    const map = yield call(useFetchingMapAPI);
    // console.log('result 출력: ', map);
    yield put({
      type: FETCH_MAP_SUCCESS,
      map: map,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: FETCH_MAP_FAILURE,
      error: err.response,
    });
  }
}

function* fetchAddress(param) {
  const { result, status } = param;
  try {
    yield put({
      type: FETCH_ADDRESS_SUCCESS,
      result,
      status,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: FETCH_ADDRESS_FAILURE,
      status,
    });
  }
}

function* watchFetchMap() {
  yield takeLatest(FETCH_MAP_REQUEST, fetchMap);
  yield takeLatest(FETCH_ADDRESS_REQUEST, fetchAddress);
}

export default function* mapSaga() {
  yield all([fork(watchFetchMap)]);
}
