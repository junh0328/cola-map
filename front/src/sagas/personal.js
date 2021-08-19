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
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
} from 'reducers/personal';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

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
    myId: localStorage.getItem('myId'),
    myNickname: localStorage.getItem('nickname'),
  };
  return data;
}

function* loadInfoRequest() {
  try {
    const result = yield call(loadInfoAPI);
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
    localStorage.removeItem('_id');
    localStorage.removeItem('nickname');
  } catch (err) {
    console.log(err);
  }
}

function* logOutRequest() {
  try {
    yield call(logOutAPI);
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
  if (localStorage.getItem('token')) {
    const tokenConfig = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    return axios.get('/post/user', tokenConfig);
  } else {
    console.log('isnt Token...');
    return;
  }
}

function* loadMyPostsRequest(action) {
  try {
    const result = yield call(loadMyPostsAPI);
    if (result.data.posts !== undefined) {
      yield put({
        type: LOAD_MY_POSTS_SUCCESS,
        data: result.data.posts,
      });
    } else return;
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function changeNicknameAPI(data) {
  // 위의 loadMyPostsAPI 함수와 동일
  if (localStorage.getItem('token')) {
    const tokenConfig = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    localStorage.setItem('nickname', data.profileNickname);
    return axios.patch('/user/nickname', data, tokenConfig);
  } else {
    console.log('isnt Token...');
    return;
  }
}

function* changeNicknameRequest(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
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

function* watchChangeNicknameRequest() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNicknameRequest);
}

export default function* personalSaga() {
  yield all([
    fork(watchCheckUserRequest),
    fork(watchLoadInfoRequest),
    fork(watchLogOutRequest),
    fork(watchloadMyPostsRequest),
    fork(watchChangeNicknameRequest),
  ]);
}
