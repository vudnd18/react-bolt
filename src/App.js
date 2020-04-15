import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configureStore, { history } from './store/configureStore';
import Routes from './components/Routes';

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ToastContainer />
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default App;
