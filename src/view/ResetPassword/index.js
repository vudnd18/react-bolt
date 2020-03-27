import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as Icon from 'react-feather';
import { resetPassword } from '../../apis/auth';
import PasswordInput from '../../components/Input/PasswordInput';
import resetPasswordModel from '../../FomModel/resetPasswordModel';
import useForm from '../../hooks/useForm';
import ButtonSubmit from '../../components/ButtonSubmit';

function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const Components = { PasswordInput };
  const { hashId } = useParams();
  const submitCallback = async () => {
    const password = inputs[0].value;
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
  const [inputs, setInputs, setSubmit] = useForm(resetPasswordModel, submitCallback);
  const capitalize = expression => {
    return expression.charAt(0).toUpperCase() + expression.slice(1);
  };
  const renderInput = input => {
    const Component = Components[`${capitalize(input.type)}Input`];
    return <Component key={input.name} setInputs={setInputs} {...input} />;
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
            <form className="wd-70p" onSubmit={setSubmit}>
              {inputs.map(input => renderInput(input))}
              {error !== '' ? <div className="text-danger mg-b-15">{error}</div> : ''}
              <ButtonSubmit name="Change Password" loading={isLoading} />
            </form>
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
