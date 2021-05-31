import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import useFetchingMap from '../apis/useFetchingMap';
import { useGetMyLoc } from '../apis/useGetMyLoc';

import {
  FETCH_MAP_FAILURE,
  FETCH_MAP_REQUEST,
  FETCH_MAP_SUCCESS,
  GET_LOCATION_FAILURE,
  GET_LOCATION_REQUEST,
  GET_LOCATION_SUCCESS,
  SET_ADDRESS_REQEUST,
  SET_ADDRESS_SUCCESS,
  SET_ADDRESS_FAILURE,
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

async function useGetMyLocationAPI() {
  try {
    return await useGetMyLoc();
  } catch (error) {
    console.log(error);
  }
}

function* getLocation() {
  try {
    const map = yield call(useGetMyLocationAPI);
    // console.log('result 출력: ', map);
    yield put({
      type: GET_LOCATION_SUCCESS,
      map: map,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: GET_LOCATION_FAILURE,
      error: err.response,
    });
  }
}

function* setAddress(param) {
  const { address, status } = param;
  try {
    yield put({
      type: SET_ADDRESS_SUCCESS,
      address,
      status,
    });
  } catch (err) {
    console.log(err);
  }
}

function* watchFetchMap() {
  yield takeLatest(FETCH_MAP_REQUEST, fetchMap);
}

function* watchGetLocation() {
  yield takeLatest(GET_LOCATION_REQUEST, getLocation);
}

function* watchSetAddress() {
  yield takeLatest(SET_ADDRESS_REQEUST, setAddress);
}

export default function* mapSaga() {
  yield all([fork(watchFetchMap), fork(watchGetLocation), fork(watchSetAddress)]);
}
