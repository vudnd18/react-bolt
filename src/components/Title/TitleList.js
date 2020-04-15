import React from 'react';
import Proptypes from 'prop-types';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

function TitleList({ name, to }) {
  return (
    <div className="d-flex justify-content-between align-items-center mg-b-20">
      <h4>{name}</h4>
      <Link className="btn btn-xs btn-success mg-r-5" to={`/${to}/addNew`}>
        <Icon.PlusCircle /> Add New
      </Link>
    </div>
  );
}

TitleList.propTypes = {
  name: Proptypes.string,
  to: Proptypes.string,
};

export default TitleList;
