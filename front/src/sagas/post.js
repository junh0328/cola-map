import axios from 'axios';
import {
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_STORE_FAILURE,
  GET_STORE_REQUEST,
  GET_STORE_SUCCESS,
  POST_STORE_FAILURE,
  POST_STORE_REQUEST,
  POST_STORE_SUCCESS,
} from 'reducers/post';

import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { myConfig } from 'sagas';

function getStoreRequestAPI(data) {
  try {
    return axios.get(`/post/store/${data}`);
  } catch (err) {
    console.log(err);
  }
}

function* getStoreRequest(action) {
  // console.log('check store id before get Method:', action.data);
  try {
    const result = yield call(getStoreRequestAPI, action.data);
    // console.log('check result: ', result.data);

    yield put({
      type: GET_STORE_SUCCESS,
      data: result.data.posts,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_STORE_FAILURE,
      error: err,
    });
  }
}

function postStoreRequestAPI(data) {
  // console.log('check before axios request:', data, localStorage.getItem('token'));
  try {
    return axios.post('/post', data, myConfig);
  } catch (err) {
    console.log(err);
  }
}

function* postStoreRequest(action) {
  // console.log('check before action:', action);
  try {
    const result = yield call(postStoreRequestAPI, action.data);
    // console.log('result.data.post:', result.data.result.post);
    yield put({
      type: POST_STORE_SUCCESS,
      data: result.data.result.post,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: POST_STORE_FAILURE,
      error: err,
    });
  }
}

function deletePostRequestAPI(data) {
  try {
    return axios.delete(`/post/${data}`, myConfig);
  } catch (err) {
    console.log(err);
  }
}

function* deletePostRequest(action) {
  console.log('action.data: ', action);
  try {
    const result = yield call(deletePostRequestAPI, action.data);
    console.log('delete result 츨력: ', result);
    if (result.statusText === 'OK') {
      yield put({
        type: DELETE_POST_SUCCESS,
        data: action.data,
      });
    }
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_POST_FAILURE,
      error: err,
    });
  }
}

function* watchPostStore() {
  yield takeLatest(POST_STORE_REQUEST, postStoreRequest);
}
function* watchGetStore() {
  yield takeLatest(GET_STORE_REQUEST, getStoreRequest);
}
function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePostRequest);
}

export default function* postSaga() {
  yield all([fork(watchPostStore), fork(watchGetStore), fork(watchDeletePost)]);
}
