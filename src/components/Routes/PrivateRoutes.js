import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminLayout from '../AdminLayout';

function PrivateRoutes(props) {
  const { component: YourComponent, ...remainProps } = props;
  const token = localStorage.getItem(process.env.TOKEN);
  return (
    <Route
      {...remainProps}
      render={routeProps => {
        return token ? (
          <AdminLayout>
            <YourComponent {...routeProps} />
          </AdminLayout>
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

PrivateRoutes.propTypes = {
  component: PropTypes.object,
};

export default PrivateRoutes;
