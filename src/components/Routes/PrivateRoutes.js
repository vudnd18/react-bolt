import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axiosService from '../../lib/axiosService';

function PrivateRoutes(props) {
  const { component: YourComponent, ...remainProps } = props;
  const token = localStorage.getItem(process.env.TOKEN);
  if (token) {
    axiosService.setHeader('Authorization', `Bearer ${token}`);
  }
  return (
    <Route
      {...remainProps}
      render={routeProps => {
        return token ? <YourComponent {...routeProps} /> : <Redirect to="/login" />;
      }}
    />
  );
}

PrivateRoutes.propTypes = {
  component: PropTypes.object,
};

export default PrivateRoutes;
