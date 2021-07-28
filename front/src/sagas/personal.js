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
  LOAD_MY_POSTS_REQUEST,
  LOAD_MY_POSTS_SUCCESS,
  LOAD_MY_POSTS_FAILURE,
} from 'reducers/personal';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { myConfig } from 'sagas';

function checkUserAPI() {
  return axios.get('/');
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
  const data = {
    myToken: localStorage.getItem('token'),
    myId: localStorage.getItem('uniqId'),
    myNickname: localStorage.getItem('nickname'),
  };
  return data;
}

function* loadInfoRequest() {
  try {
    const result = yield call(loadInfoAPI);
    // console.log('load Info Data:', result);
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
    // console.log('load Info Data:', result);
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

function loadMyPostsAPI() {
  // 로그인 후에 > 바로 personal 페이지에 접근 시, myConfig(로컬 스토리지에 저장된 나의 토큰) 확인
  console.log('myConfig:', myConfig);
  if (localStorage.getItem('token')) {
    console.log('isToken and axios data: ', localStorage.getItem('token'));
    return axios.get('/post/user', myConfig);
  } else {
    console.log('isnt Token...');
    return;
  }
}

function* loadMyPostsRequest(action) {
  console.log('loadMyPostsRequest action: ', action);
  try {
    const result = yield call(loadMyPostsAPI);
    console.log('load my posts result:', result.data.posts);
    yield put({
      type: LOAD_MY_POSTS_SUCCESS,
      data: result.data.posts,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_POSTS_FAILURE,
      error: err.response.data,
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

function* watchloadMyPostsRequest() {
  yield takeLatest(LOAD_MY_POSTS_REQUEST, loadMyPostsRequest);
}

export default function* personalSaga() {
  yield all([
    fork(watchCheckUserRequest),
    fork(watchLoadInfoRequest),
    fork(watchLogOutRequest),
    fork(watchloadMyPostsRequest),
  ]);
}
