import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';

const rootReducer = history => {
  return combineReducers({
    auth,
    router: connectRouter(history),
  });
};

export default rootReducer;
