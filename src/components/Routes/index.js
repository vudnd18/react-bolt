import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { privateRoutes, publicRoutes } from './RouterConstant';
import PrivateRoutes from './PrivateRoutes';

function renderAdminRoutes() {
  let xhtml = null;
  xhtml = privateRoutes.map(route => {
    return (
      <PrivateRoutes
        component={route.component}
        exact={route.exact}
        key={route.path}
        path={route.path}
      />
    );
  });
  return xhtml;
}

function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {publicRoutes.map(route => (
          <Route key={route.id} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))}
        {renderAdminRoutes()}
        <Redirect to="/dashboard" />
      </Switch>
    </Suspense>
  );
}

privateRoutes.propTypes = {
  component: PropTypes.object,
};

export default Routes;
