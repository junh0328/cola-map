import axios from 'axios';
import { LOGIN_DONE, LOGIN_FAILURE, LOGIN_REQUEST } from 'reducers/personal';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

function loginAPI(data) {
  console.log('loginAPI data:', data);
  try {
    axios.defaults.withCredentials = true;
    return axios.post(`http://localhost:5000/user/login?uniqId=${data.uniqId}&nickname=${data.nickname}`, data);
  } catch (err) {
    console.log(err);
  }
}

function* loginRequest(action) {
  console.log('action: ', action);
  try {
    const result = yield call(loginAPI, action.data);
    console.log('result:', result);
    yield put({
      type: LOGIN_DONE,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_FAILURE,
      error: err,
    });
  }
}

function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}

export default function* personalSaga() {
  yield all([fork(watchLoginRequest)]);
}
