import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import loginModel from '../../FomModel/loginModel';
import TextInput from '../../components/Input/TextInput';
import PasswordInput from '../../components/Input/PasswordInput';
import * as authActions from '../../store/actions/auth';
import ButtonSubmit from '../../components/ButtonSubmit';

function Login() {
  const dispatch = useDispatch();
  const submitCallback = () => {
    const email = inputs[0].value;
    const password = inputs[1].value;
    dispatch(authActions.login(email, password));
  };
  const errorLogin = useSelector(state => state.auth.errorLogin);
  const loading = useSelector(state => state.auth.loading);
  const [inputs, setInputs, setSubmit] = useForm(loginModel, submitCallback);
  const capitalize = expression => {
    return expression.charAt(0).toUpperCase() + expression.slice(1);
  };
  const Components = { TextInput, PasswordInput };
  const renderInput = input => {
    const Component = Components[`${capitalize(input.type)}Input`];
    return <Component key={input.name} setInputs={setInputs} {...input} />;
  };
  return (
    <div className="content content-fixed content-auth">
      <div className="container">
        <div className="media align-items-stretch justify-content-center pos-relative">
          <div className="media-body align-items-center d-none d-lg-flex">
            <img src="/login.png" className="img-fluid" alt="login images" />
          </div>
          <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
            <div className="wd-100p">
              <h3 className="tx-color-01 mg-b-5">Log In</h3>
              <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please login to continue.</p>
              <form onSubmit={setSubmit}>
                {inputs.map(input => renderInput(input))}
                {errorLogin !== '' ? <div className="text-danger mg-b-15">{errorLogin}</div> : ''}
                <ButtonSubmit name="Login" loading={loading} />
              </form>
              {/* <div className="divider-text">or</div>
              <button type="button" className="btn btn-outline-facebook btn-block">
                Sign In With Facebook
              </button> */}
              <div className="tx-14 mg-t-20 tx-center">
                <Link to="forgot-password">Forgot password?</Link>
              </div>
              <div className="tx-13 mg-t-20 tx-center">
                Don &apos; t have an account? <Link to="/signup">Create an Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
