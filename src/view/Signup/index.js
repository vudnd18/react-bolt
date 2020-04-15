import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import model from './model';
import { registry } from '../../apis/auth';
import SignupSuccess from './SignupSuccess';
import FormPanel from '../../components/FormPanel';

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const submitCallback = async () => {
    const name = model[0].value;
    const email = model[1].value;
    const phone = model[2].value;
    const password = model[3].value;
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
              <FormPanel
                submitCallback={submitCallback}
                model={model}
                errorSubmit={error}
                loading={isLoading}
              />
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
