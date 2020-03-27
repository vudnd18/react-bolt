import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes/auth';
import { loginSuccess, loginFailed } from '../actions/auth';
import { login } from '../../apis/auth';
import { STATUS_CODE } from '../../constants';
import axiosService from '../../lib/axiosService';

function* processLogin({ payload }) {
  try {
    const { email, password } = payload;
    const resp = yield call(login, {
      email,
      password,
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(loginSuccess(data.data));
      const { accessToken } = data.data;
      localStorage.setItem(process.env.TOKEN, accessToken);
      yield put(push('/dashboard'));
    }
  } catch (error) {
    const { response } = error;
    const errorString = response.data.message;
    yield put(loginFailed(errorString));
  }
}

function* authSaga() {
  yield takeLatest(types.LOGIN, processLogin);
}

export default authSaga;
