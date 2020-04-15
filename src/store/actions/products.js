import * as types from '../actionTypes/products';

export const fetchProducts = query => ({
  type: types.FETCH_PRODUCTS,
  payload: {
    query,
  },
});

export const fetchProductsSuccess = data => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchProductsFailed = error => ({
  type: types.FETCH_PRODUCTS_FAILED,
  payload: {
    error,
  },
});

export const getProduct = id => ({
  type: types.GET_PRODUCT,
  payload: {
    id,
  },
});

export const getProductSuccess = data => ({
  type: types.GET_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});

export const getProductFailed = error => ({
  type: types.GET_PRODUCT_FAILED,
  payload: {
    error,
  },
});

export const createProduct = query => ({
  type: types.CREATE_PRODUCT,
  payload: {
    query,
  },
});

export const createProductSuccess = data => ({
  type: types.CREATE_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});

export const createProductFailed = error => ({
  type: types.CREATE_PRODUCT_FAILED,
  payload: {
    error,
  },
});

export const editProduct = data => ({
  type: types.EDIT_PRODUCT,
  payload: {
    data,
  },
});

export const editProductSuccess = data => ({
  type: types.EDIT_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});

export const editProductFailed = error => ({
  type: types.EDIT_PRODUCT_FAILED,
  payload: {
    error,
  },
});