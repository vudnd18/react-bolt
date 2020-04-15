import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { forgotPassword } from '../../apis/auth';
import model from './model';
import FormPanel from '../../components/FormPanel';

function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const submitCallback = async () => {
    const email = model[0].value;
    setError('');
    setIsLoading(true);
    try {
      const response = await forgotPassword(email);
      const { status } = response;
      if (status === 200) {
        setIsSuccess(true);
      }
    } catch (err) {
      const { response } = err;
      setError(response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="content content-fixed content-auth-alt">
      <div className="container d-flex justify-content-center ">
        <div className="mx-wd-300 wd-sm-450 d-flex flex-column align-items-center justify-content-center">
          <div className="wd-80p wd-sm-300">
            <img src="/signup-success.png" className="img-fluid" alt="" />
            <h4 className="tx-20 tx-sm-24 tx-center">Forgot password</h4>
            <p className="tx-color-03 mg-b-30 tx-center">
              {isSuccess
                ? 'Please check your mail box to recover your password'
                : 'Enter your email address and we will send you a link to reset your password.'}
            </p>
          </div>
          {isSuccess ? (
            ''
          ) : (
            <FormPanel
              submitCallback={submitCallback}
              model={model}
              errorSubmit={error}
              loading={isLoading}
            />
          )}
          <div className="tx-14 mg-t-5 tx-center">
            <Icon.ChevronLeft size={14} />
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
