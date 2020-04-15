import * as types from '../actionTypes/categories';

export const fetchCategories = query => ({
  type: types.FETCH_CATEGORIES,
  payload: {
    query,
  },
});

export const fetchCategoriesSuccess = data => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  payload: {
    data,
  },
});

export const fetchCategoriesFailed = error => ({
  type: types.FETCH_CATEGORIES_FAILED,
  payload: {
    error,
  },
});

export const fetchParentCategories = () => ({
  type: types.FETCH_PARENT_CATEGORIES,
});

export const fetchParentCategoriesSuccess = data => ({
  type: types.FETCH_PARENT_CATEGORIES_SUCCESS,
  payload: {
    data,
  },
});

export const fetchParentCategoriesFailed = error => ({
  type: types.FETCH_PARENT_CATEGORIES_FAILED,
  payload: {
    error,
  },
});

export const getCategory = id => ({
  type: types.GET_CATEGORY,
  payload: {
    id,
  },
});

export const getCategorySuccess = data => ({
  type: types.GET_CATEGORY_SUCCESS,
  payload: {
    data,
  },
});

export const getCategoryFailed = error => ({
  type: types.GET_CATEGORY_FAILED,
  payload: {
    error,
  },
});

export const createCategory = query => ({
  type: types.CREATE_CATEGORY,
  payload: {
    query,
  },
});

export const createCategorySuccess = data => ({
  type: types.CREATE_CATEGORY_SUCCESS,
  payload: {
    data,
  },
});

export const createCategoryFailed = error => ({
  type: types.CREATE_CATEGORY_FAILED,
  payload: {
    error,
  },
});

export const deleteCategory = id => ({
  type: types.DELETE_CATEGORY,
  payload: {
    id,
  },
});

export const deleteCategorySuccess = data => ({
  type: types.DELETE_CATEGORY_SUCCESS,
  payload: {
    data,
  },
});

export const deleteCategoryFailed = error => ({
  type: types.DELETE_CATEGORY_FAILED,
  payload: {
    error,
  },
});

export const editCategory = data => ({
  type: types.EDIT_CATEGORY,
  payload: {
    data,
  },
});

export const editCategorySuccess = data => ({
  type: types.EDIT_CATEGORY_SUCCESS,
  payload: {
    data,
  },
});

export const editCategoryFailed = error => ({
  type: types.EDIT_CATEGORY_FAILED,
  payload: {
    error,
  },
});

export const getAllCategory = () => ({
  type: types.GET_ALL_CATEGORY,
});

export const getAllCategorySuccess = data => ({
  type: types.GET_ALL_CATEGORY_SUCCESS,
  payload: {
    data,
  },
});

export const getAllCategoryFailed = error => ({
  type: types.GET_ALL_CATEGORY_FAILED,
  payload: {
    error,
  },
});
