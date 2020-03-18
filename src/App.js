import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import configureStore, { history } from './store/configureStore';
import Login from './view/Login';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exac path="/login" component={Login} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
