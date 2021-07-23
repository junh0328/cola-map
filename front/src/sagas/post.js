import axios from 'axios';
import { POST_STORE_FAILURE, POST_STORE_REQUEST, POST_STORE_SUCCESS } from 'reducers/post';

import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

function postStoreRequestAPI(data) {
  try {
    return axios.post('/post', data);
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
      data: result.data,
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

export default function* postSaga() {
  yield all([fork(watchPostStore)]);
}
