import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import categories from './categories';
import products from './products';

const rootReducer = history => {
  return combineReducers({
    auth,
    categories,
    products,
    router: connectRouter(history),
  });
};

export default rootReducer;
