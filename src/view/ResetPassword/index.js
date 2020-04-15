import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as Icon from 'react-feather';
import { resetPassword } from '../../apis/auth';
import model from './model';
import FormPanel from '../../components/FormPanel';

function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { hashId } = useParams();
  const submitCallback = async () => {
    const password = model[0].value;
    setError('');
    setIsLoading(true);
    try {
      const response = await resetPassword({ hashId, password });
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
          <div className="wd-80p wd-sm-300 mg-b-15">
            <img src="/signup-success.png" className="img-fluid" alt="" />
            <h4 className="tx-20 tx-sm-24 tx-center">Reset password</h4>
            {isSuccess ? (
              <p className="tx-color-03 mg-b-30 tx-center">
                You have successfully changed the password
              </p>
            ) : (
              ''
            )}
          </div>
          {isSuccess ? (
            ''
          ) : (
            <div className="wd-80p wd-sm-300">
              <FormPanel
                submitCallback={submitCallback}
                model={model}
                errorSubmit={error}
                loading={isLoading}
              />
            </div>
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

export default ResetPassword;
