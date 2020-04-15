import React from 'react';
import PropsType from 'prop-types';
import TextInput from '../Input/TextInput';
import PasswordInput from '../Input/PasswordInput';
import SelectInput from '../Input/SelectInput';
import TextareaInput from '../Input/TextareaInput';
import FileInput from '../Input/FileInput';
import MultipleFileInput from '../Input/MultipleFileInput';
import useForm from '../../hooks/useForm';
import ButtonSubmit from '../ButtonSubmit';

function FormPanelCURD(props) {
  const { submitCallback, model, loading, refreshData } = props;
  const [
    inputs,
    setInputs,
    setSubmit,
    setInputTextArea,
    handleUploadListImage,
    deleteImage,
  ] = useForm(model, submitCallback);
  const Components = {
    TextInput,
    PasswordInput,
    SelectInput,
    TextareaInput,
    FileInput,
    MultipleFileInput,
  };
  const capitalize = expression => {
    return expression.charAt(0).toUpperCase() + expression.slice(1);
  };
  const renderInput = input => {
    const Component = Components[`${capitalize(input.type)}Input`];
    if (input.type === 'textarea') {
      return (
        <Component
          key={input.name}
          setInputs={setInputTextArea}
          classNameLabel="col-sm-2 col-form-label"
          classNameInput="col-sm-10"
          {...input}
        />
      );
    }
    if (input.type === 'file') {
      return (
        <Component
          key={input.name}
          setInputs={setInputTextArea}
          classNameLabel="col-sm-2 col-form-label"
          classNameInput="col-sm-10"
          {...input}
        />
      );
    }
    if (input.type === 'multipleFile') {
      return (
        <Component
          key={input.name}
          setInputs={handleUploadListImage}
          deleteImage={deleteImage}
          classNameLabel="col-sm-2 col-form-label"
          classNameInput="col-sm-10"
          {...input}
        />
      );
    }
    return (
      <Component
        key={input.name}
        setInputs={setInputs}
        classNameLabel="col-sm-2 col-form-label"
        classNameInput="col-sm-10"
        {...input}
      />
    );
  };
  return (
    <form onSubmit={setSubmit}>
      {inputs.map(input => renderInput(input))}
      <div className="form-group row">
        <ButtonSubmit name="Submit" className="col-md-2 offset-md-2 mg-b-10" loading={loading} />
        <button
          type="button"
          className="btn btn-primary col-md-2 mg-l-10 mg-b-10"
          onClick={refreshData}
        >
          Refresh
        </button>
      </div>
    </form>
  );
}

FormPanelCURD.propTypes = {
  submitCallback: PropsType.func,
  model: PropsType.array,
  refresh: PropsType.bool,
  loading: PropsType.bool,
  refreshData: PropsType.func,
};

export default FormPanelCURD;
