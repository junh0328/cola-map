import { getSearchData } from 'apis/useGetSearchData';
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
  SEARCH_ADDRESS_REQUEST,
  SEARCH_ADDRESS_SUCCESS,
  SEARCH_ADDRESS_FAILURE,
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
    yield put({
      type: SET_ADDRESS_FAILURE,
      error: err.response,
    });
  }
}

async function searchAddressAPI(data) {
  try {
    const result = await getSearchData(data);
    return result[0];
  } catch (error) {
    console.log(error);
  }
}

function* searchAddress(action) {
  try {
    const data = yield call(searchAddressAPI, action.data);
    yield put({
      type: SEARCH_ADDRESS_SUCCESS,
      data: data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: SEARCH_ADDRESS_FAILURE,
      error: err.response,
    });
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

function* watchSearchAddress() {
  yield takeLatest(SEARCH_ADDRESS_REQUEST, searchAddress);
}

export default function* mapSaga() {
  yield all([fork(watchFetchMap), fork(watchGetLocation), fork(watchSetAddress), fork(watchSearchAddress)]);
}
