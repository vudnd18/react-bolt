import * as types from '../actionTypes/products';
import { toastError, toastSuccess } from '../../lib/toastHelper';

const initialState = {
  list: null,
  loadingList: false,
  detail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS: {
      return {
        ...state,
        loadingList: true,
      };
    }
    case types.FETCH_PRODUCTS_SUCCESS: {
      const list = action.payload.data;
      return {
        ...state,
        list,
        loadingList: false,
      };
    }
    case types.FETCH_PRODUCTS_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        loadingList: false,
      };
    }
    case types.GET_PRODUCT: {
      return {
        ...state,
        delete: false,
      };
    }
    case types.GET_PRODUCT_SUCCESS: {
      const detail = action.payload.data;
      return {
        ...state,
        detail,
      };
    }
    case types.GET_PRODUCT_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
