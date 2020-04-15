import * as types from '../actionTypes/ui';

const initialState = {
  classBody: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SIDEBAR:
      return {
        ...state,
        classBody: 'sidebar-show',
      };
    case types.HIDE_SIDEBAR:
      return {
        ...state,
        classBody: '',
      };
    default:
      return state;
  }
};

export default reducer;
