import React from 'react';
import PropsType from 'prop-types';
import TextInput from '../Input/TextInput';
import PasswordInput from '../Input/PasswordInput';
import useForm from '../../hooks/useForm';
import ButtonSubmit from '../ButtonSubmit';

function FormPanel({ submitCallback, model, errorSubmit, loading }) {
  const [inputs, setInputs, setSubmit] = useForm(model, submitCallback);
  const Components = { TextInput, PasswordInput };
  const capitalize = expression => {
    return expression.charAt(0).toUpperCase() + expression.slice(1);
  };
  const renderInput = input => {
    const Component = Components[`${capitalize(input.type)}Input`];
    return <Component key={input.name} setInputs={setInputs} {...input} />;
  };
  return (
    <form onSubmit={setSubmit}>
      {inputs.map(input => renderInput(input))}
      {errorSubmit !== '' ? <div className="text-danger mg-b-15">{errorSubmit}</div> : ''}
      <div className="form-group row">
        <ButtonSubmit name="Submit" className="" loading={loading} />
      </div>
    </form>
  );
}

FormPanel.propTypes = {
  submitCallback: PropsType.func,
  model: PropsType.array,
  errorSubmit: PropsType.string,
  loading: PropsType.bool,
};

export default FormPanel;
