import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes/categories';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  fetchParentCategoriesSuccess,
  fetchParentCategoriesFailed,
  createCategorySuccess,
  createCategoryFailed,
  getCategorySuccess,
  getCategoryFailed,
  deleteCategorySuccess,
  deleteCategoryFailed,
  editCategorySuccess,
  editCategoryFailed,
  getAllCategorySuccess,
  getAllCategoryFailed,
} from '../actions/categories';
import { list, listParent, create, get, deleteItem, update, getAll } from '../../apis/categories';
import { STATUS_CODE } from '../../constants';

function* processFetchList({ payload }) {
  try {
    const resp = yield call(list, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchCategoriesSuccess(data));
    }
  } catch (error) {
    const { response } = error;
    yield put(fetchCategoriesFailed(response));
  }
}

function* processFetchParents({ payload }) {
  try {
    const resp = yield call(listParent, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchParentCategoriesSuccess(data));
    }
  } catch (error) {
    const { response } = error;
    yield put(fetchParentCategoriesFailed(response));
  }
}

function* processCreate({ payload }) {
  try {
    const resp = yield call(create, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(createCategorySuccess(data));
    }
  } catch (error) {
    const { response } = error;
    yield put(createCategoryFailed(response));
  }
}

function* processGet({ payload }) {
  try {
    const resp = yield call(get, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getCategorySuccess(data));
    }
  } catch (error) {
    const { response } = error;
    yield put(getCategoryFailed(response));
  }
}

function* processDelete({ payload }) {
  try {
    const resp = yield call(deleteItem, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteCategorySuccess(data));
    }
  } catch (error) {
    const { response } = error;
    yield put(deleteCategoryFailed(response));
  }
}

function* processEdit({ payload }) {
  try {
    const resp = yield call(update, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editCategorySuccess(data));
    }
  } catch (error) {
    const { response } = error;
    yield put(editCategoryFailed(response));
  }
}

function* processGetAll({ payload }) {
  try {
    const resp = yield call(getAll, payload);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getAllCategorySuccess(data));
    }
  } catch (error) {
    const { response } = error;
    yield put(getAllCategoryFailed(response));
  }
}

function* categoriesSaga() {
  yield takeLatest(types.FETCH_CATEGORIES, processFetchList);
  yield takeLatest(types.FETCH_PARENT_CATEGORIES, processFetchParents);
  yield takeLatest(types.CREATE_CATEGORY, processCreate);
  yield takeLatest(types.GET_CATEGORY, processGet);
  yield takeLatest(types.DELETE_CATEGORY, processDelete);
  yield takeLatest(types.EDIT_CATEGORY, processEdit);
  yield takeLatest(types.GET_ALL_CATEGORY, processGetAll);
}

export default categoriesSaga;
