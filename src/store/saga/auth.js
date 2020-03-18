import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes/auth';
import { loginSuccess, loginFailed } from '../actions/auth';


function* processLogin({ payload }) {
  try {
    const { email, password } = payload;
    const resp = yield call(login, {
      email,
      password,
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(loginSuccess(data));
      const { token } = data;
      axiosService.setHeader('Authorization', `Bearer ${token}`);
      localStorage.setItem('TOKEN', token);
      yield put(push('/'));
    }
  } catch (error) {
    // const { response } = error;
    // const { data, status } = response;
    const errorString = 'email or password incorrect';
    yield put(loginFailed(errorString));
  }
}

function* authSaga() {
  yield takeLatest(types.LOGIN, processLogin);
}

export default authSaga;
