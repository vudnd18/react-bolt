import React from 'react';
import Proptypes from 'prop-types';

function ButtonSubmit({ name, className, loading }) {
  return (
    <button className={`btn btn-brand-02 btn-block ${className}`} type="submit" disabled={loading}>
      {!loading ? (
        <span>{name}</span>
      ) : (
        <>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
          <span className="sr-only">Loading...</span>
        </>
      )}
    </button>
  );
}

ButtonSubmit.propTypes = {
  loading: Proptypes.bool,
  name: Proptypes.string,
  className: Proptypes.string,
};

export default ButtonSubmit;
