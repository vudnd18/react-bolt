import * as types from '../actionTypes/auth';

const initialState = {
  data: null,
  error: '',
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        data,
        error: '',
        loading: false,
      };
    }
    case types.LOGIN_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        error,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
