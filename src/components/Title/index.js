import React from 'react';
import Proptypes from 'prop-types';

function Title({ name }) {
  return (
    <div className="d-flex justify-content-between align-items-center mg-b-20">
      <h4>{name}</h4>
    </div>
  );
}

Title.propTypes = {
  name: Proptypes.string,
};

export default Title;
