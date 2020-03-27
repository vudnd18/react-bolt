import React from 'react';
import { Link } from 'react-router-dom';

function SignupSuccess() {
  return (
    <div className="content content-fixed content-auth-alt">
      <div className="container d-flex justify-content-center">
        <div className="mx-wd-300 d-flex flex-column align-items-center justify-content-center">
          <div className="wd-80p wd-sm-300 mg-b-15">
            <img src="/signup-success.png" className="img-fluid" alt="" />
          </div>
          <h4 className="tx-20 tx-sm-24">Verify your email address</h4>
          <p className="tx-color-03 mg-b-30 tx-center">
            You have successfully signed up for an account.Please check your email and click the
            verify button or link to verify your account.
          </p>
          <Link to="login" className="btn btn-brand-02 mg-sm-l-10 mg-t-10 mg-sm-t-0">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupSuccess;
