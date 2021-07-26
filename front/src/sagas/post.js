import axios from 'axios';
import {
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
    console.log('check result: ', result.data);

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
  console.log('check before axios request:', data, localStorage.getItem('token'));
  try {
    return axios.post('/post', data, myConfig);
  } catch (err) {
    console.log(err);
  }
}

function* postStoreRequest(action) {
  console.log('check before action:', action);
  try {
    const result = yield call(postStoreRequestAPI, action.data);
    console.log(result);
    yield put({
      type: POST_STORE_SUCCESS,
      data: result.data.message,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: POST_STORE_FAILURE,
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

export default function* postSaga() {
  yield all([fork(watchPostStore), fork(watchGetStore)]);
}
