import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import useForm from '../../hooks/useForm';
import { forgotPassword } from '../../apis/auth';
import TextInput from '../../components/Input/TextInput';
import ButtonSubmit from '../../components/ButtonSubmit';
import forgotPasswordModel from '../../FomModel/forgotPasswordModel';

function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const Components = { TextInput };
  const submitCallback = async () => {
    const email = inputs[0].value;
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
  const [inputs, setInputs, setSubmit] = useForm(forgotPasswordModel, submitCallback);
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
            <form className="" onSubmit={setSubmit}>
              <div className="wd-100p d-flex flex-column flex-sm-row">
                {inputs.map(input => renderInput(input))}
              </div>
              {error !== '' ? <div className="text-danger mg-b-15">{error}</div> : ''}
              <ButtonSubmit name="Send Email" loading={isLoading} />
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

export default ForgotPassword;
