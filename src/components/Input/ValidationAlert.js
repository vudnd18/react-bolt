import React from 'react';
import PropTypes from 'prop-types';

const ValidationAlert = ({ content }) => {
  return <div className="text-danger mg-t-5">{content}</div>;
};

ValidationAlert.propTypes = {
  content: PropTypes.string,
};

export default ValidationAlert;
