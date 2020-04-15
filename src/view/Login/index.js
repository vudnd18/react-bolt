import React, { useEffect } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import model from './model';
import * as authActions from '../../store/actions/auth';
import FormPanel from '../../components/FormPanel';

function Login() {
  const token = localStorage.getItem(process.env.TOKEN);
  if (token) {
    return <Redirect to="/dashboard" />;
  }
  const dispatch = useDispatch();
  const submitCallback = () => {
    const email = model[0].value;
    const password = model[1].value;
    dispatch(authActions.login(email, password));
  };
  const errorLogin = useSelector(state => state.auth.errorLogin);
  const loading = useSelector(state => state.auth.loading);
  return (
    <div className="content content-fixed content-auth">
      <div className="container">
        <div className="media align-items-stretch justify-content-center pos-relative">
          <div className="media-body align-items-center d-none d-lg-flex">
            <img src="/login.png" className="img-fluid" alt="login images" />
          </div>
          <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60 col-sm-4">
            <div className="wd-100p">
              <h3 className="tx-color-01 mg-b-5">Log In</h3>
              <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please login to continue.</p>
              <FormPanel
                submitCallback={submitCallback}
                model={model}
                errorSubmit={errorLogin}
                loading={loading}
              />
              <div className="tx-14 mg-t-20 tx-center">
                <Link to="forgot-password">Forgot password?</Link>
              </div>
              <div className="tx-13 mg-t-20 tx-center">
                Don&apos;t have an account? <Link to="/signup">Create an Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
