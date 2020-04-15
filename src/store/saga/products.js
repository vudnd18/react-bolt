import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes/products';
import {
  fetchProductsSuccess,
  fetchProductsFailed,
  getProductSuccess,
  getProductFailed,
  createProductSuccess,
  createProductFailed,
  editProductSuccess,
  editProductFailed,
} from '../actions/products';
import { list, get, edit, create } from '../../apis/products';
import { STATUS_CODE } from '../../constants';

function* processFetchList({ payload }) {
  try {
    const resp = yield call(list, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchProductsSuccess(data));
    }
  } catch (error) {
    const { response } = error;
    yield put(fetchProductsFailed(response));
  }
}

function* processGet({ payload }) {
  try {
    const resp = yield call(get, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getProductSuccess(data));
    }
  } catch (error) {
    const { response } = error;
    yield put(getProductFailed(response));
  }
}

function* productsSaga() {
  yield takeLatest(types.FETCH_PRODUCTS, processFetchList);
  yield takeLatest(types.GET_PRODUCT, processGet);
}

export default productsSaga;
