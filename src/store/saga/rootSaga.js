import { fork, all } from 'redux-saga/effects';
import authSaga from './auth';
import categoriesSaga from './categories';
import productsSaga from './products';

function* rootSaga() {
  yield all([yield fork(authSaga), yield fork(categoriesSaga), yield fork(productsSaga)]);
}

export default rootSaga;
