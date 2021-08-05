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
    console.log('checkUserRequest.result:', result);
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
    localStorage.removeItem('_id');
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
  // console.log('myConfig:', myConfig);
  if (localStorage.getItem('token')) {
    /* 
    사가 인덱스에서 export한 myConfig를 로그인 후, 첫 번쩨 요청시 토큰을 감지하지 못하는 오류가 있음
    loadMyPostsAPI 함수 내부에서 헤더를 다시 만들어 주었다.
    */

    // axios 데이터와 함께 보낼 헤더
    const tokenConfig = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    // console.log('isToken and axios data: ', localStorage.getItem('token'));

    return axios.get('/post/user', tokenConfig);
  } else {
    console.log('isnt Token...');
    return;
  }
}

function* loadMyPostsRequest(action) {
  // console.log('loadMyPostsRequest action: ', action);
  try {
    const result = yield call(loadMyPostsAPI);
    // console.log('load my posts result:', result.data.posts);
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
  console.log('changeNicknameRequest action: ', action);
  try {
    const result = yield call(changeNicknameAPI, action.data);
    // console.log('load my posts result:', result.data.posts);
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
