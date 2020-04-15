import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

function PageNotFound() {
  return (
    <div className="content content-auth-alt">
      <div className="container ht-100p tx-center">
        <div className="ht-100p d-flex flex-column align-items-center justify-content-center">
          <div className="wd-70p wd-sm-250 wd-lg-300 mg-b-15">
            <img src="/not-found.png" className="img-fluid" alt="" />
          </div>
          <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">404 Page Not Found</h1>
          <h5 className="tx-16 tx-sm-18 tx-lg-20 tx-normal mg-b-20">
            Oopps. The page you were looking for doesn&apos;t exist.
          </h5>
          <p className="tx-color-03 mg-b-30">
            You may have mistyped the address or the page may have moved. Try searching below.
          </p>
          <div className="tx-14 mg-t-5 tx-center">
            <Icon.ChevronLeft size={14} />
            <Link to="/login">Back to Website</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
