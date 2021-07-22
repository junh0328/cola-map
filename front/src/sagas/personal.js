import axios from 'axios';
import {
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
  CHECK_USER_REQUEST,
  LOAD_INFO_FAILURE,
  LOAD_INFO_REQUEST,
  LOAD_INFO_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from 'reducers/personal';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

function checkUserAPI() {
  try {
    return axios.get('/');
  } catch (err) {
    console.log(err);
  }
}

function* checkUserRequest() {
  try {
    const result = yield call(checkUserAPI);
    yield put({
      type: CHECK_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHECK_USER_FAILURE,
      error: err,
    });
  }
}

function loadInfoAPI() {
  try {
    const data = {
      myToken: localStorage.getItem('token'),
      myId: localStorage.getItem('uniqId'),
      myNickname: localStorage.getItem('nickname'),
    };
    return data;
  } catch (err) {
    console.log(err);
  }
}

function* loadInfoRequest() {
  try {
    const result = yield call(loadInfoAPI);
    console.log('load Info Data:', result);
    yield put({
      type: LOAD_INFO_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_INFO_FAILURE,
      error: err,
    });
  }
}

function logOutAPI() {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('uniqId');
    localStorage.removeItem('nickname');
  } catch (err) {
    console.log(err);
  }
}

function* logOutRequest() {
  try {
    const result = yield call(logOutAPI);
    console.log('load Info Data:', result);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err,
    });
  }
}

function* watchCheckUserRequest() {
  yield takeLatest(CHECK_USER_REQUEST, checkUserRequest);
}

function* watchLoadInfoRequest() {
  yield takeLatest(LOAD_INFO_REQUEST, loadInfoRequest);
}

function* watchLogOutRequest() {
  yield takeLatest(LOG_OUT_REQUEST, logOutRequest);
}

export default function* personalSaga() {
  yield all([fork(watchCheckUserRequest), fork(watchLoadInfoRequest), fork(watchLogOutRequest)]);
}
