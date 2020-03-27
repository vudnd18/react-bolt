import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import TextInput from '../../components/Input/TextInput';
import PasswordInput from '../../components/Input/PasswordInput';
import ButtonSubmit from '../../components/ButtonSubmit';
import signupModel from '../../FomModel/signupModel';
import { registry } from '../../apis/auth';
import SignupSuccess from './SignupSuccess';

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const submitCallback = async () => {
    const name = inputs[0].value;
    const email = inputs[1].value;
    const phone = inputs[2].value;
    const password = inputs[3].value;
    setError('');
    setIsLoading(true);
    try {
      const result = await registry({ name, email, phone, password, roleId: 1 });
      if (result.data.code === 200) {
        setIsSuccess(true);
      }
    } catch (error) {
      const { response } = error;
      setError(response.data.message);
    }
    setIsLoading(false);
  };
  const [inputs, setInputs, setSubmit] = useForm(signupModel, submitCallback);
  const capitalize = expression => {
    return expression.charAt(0).toUpperCase() + expression.slice(1);
  };
  const Components = { TextInput, PasswordInput };
  const renderInput = input => {
    const Component = Components[`${capitalize(input.type)}Input`];
    return <Component key={input.name} setInputs={setInputs} {...input} />;
  };
  return isSuccess ? (
    <SignupSuccess />
  ) : (
    <div className="content content-auth">
      <div className="container">
        <div className="media align-items-stretch justify-content-center ht-100p">
          <div className="sign-wrapper mg-lg-r-50 mg-xl-r-60">
            <div className="pd-t-20 wd-100p">
              <h4 className="tx-color-01 mg-b-5">Create New Account</h4>
              <p className="tx-color-03 tx-16 mg-b-40">
                It&apos;s free to signup and only takes a minute.
              </p>
              <form onSubmit={setSubmit}>
                {inputs.map(input => renderInput(input))}
                {error !== '' ? <div className="text-danger mg-b-15">{error}</div> : ''}
                <ButtonSubmit name="Sign Up" loading={isLoading} />
              </form>
              <div className="tx-13 mg-t-20 tx-center">
                Already have an account? <Link to="login">Log In</Link>
              </div>
            </div>
          </div>
          <div className="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60">
            <div className="mx-lg-wd-500 mx-xl-wd-550">
              <img src="/signup.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
