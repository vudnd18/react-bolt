import * as types from '../actionTypes/categories';
import { toastError, toastSuccess } from '../../lib/toastHelper';

const initialState = {
  list: null,
  loadingList: false,
  detail: null,
  loadingCreate: false,
  parents: null,
  delete: false,
  all: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES: {
      return {
        ...state,
        loadingList: true,
      };
    }
    case types.FETCH_CATEGORIES_SUCCESS: {
      const list = action.payload.data;
      return {
        ...state,
        list,
        loadingList: false,
      };
    }
    case types.FETCH_CATEGORIES_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        loadingList: false,
      };
    }
    case types.FETCH_PARENT_CATEGORIES: {
      return {
        ...state,
      };
    }
    case types.FETCH_PARENT_CATEGORIES_SUCCESS: {
      const parents = action.payload.data;
      return {
        ...state,
        parents,
      };
    }
    case types.FETCH_PARENT_CATEGORIES_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case types.CREATE_CATEGORY: {
      return {
        ...state,
        loadingCreate: true,
      };
    }
    case types.CREATE_CATEGORY_SUCCESS: {
      const detail = action.payload.data;
      toastSuccess('Created');
      return {
        ...state,
        detail,
        loadingCreate: false,
      };
    }
    case types.CREATE_CATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        loadingCreate: false,
      };
    }
    case types.GET_CATEGORY: {
      return {
        ...state,
        delete: false,
      };
    }
    case types.GET_CATEGORY_SUCCESS: {
      const detail = action.payload.data;
      return {
        ...state,
        detail,
      };
    }
    case types.GET_CATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case types.DELETE_CATEGORY: {
      return {
        ...state,
      };
    }
    case types.DELETE_CATEGORY_SUCCESS: {
      return {
        ...state,
        detail: null,
        delete: true,
      };
    }
    case types.DELETE_CATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        delete: false,
      };
    }
    case types.EDIT_CATEGORY: {
      return {
        ...state,
      };
    }
    case types.EDIT_CATEGORY_SUCCESS: {
      const detail = action.payload.data;
      toastSuccess('Edited');
      return {
        ...state,
        detail,
      };
    }
    case types.EDIT_CATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case types.GET_ALL_CATEGORY: {
      return {
        ...state,
      };
    }
    case types.GET_ALL_CATEGORY_SUCCESS: {
      const all = action.payload.data;
      return {
        ...state,
        all,
      };
    }
    case types.GET_ALL_CATEGORY_FAILED: {
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
