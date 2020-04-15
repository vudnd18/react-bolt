import React from 'react';
import PropTypes from 'prop-types';
import ValidationAlert from './ValidationAlert';

function TextInput({
  name,
  label,
  type,
  value,
  alert,
  disabled = false,
  setInputs,
  placeholder,
  className,
  classNameLabel = '',
  classNameInput = '',
}) {
  return (
    <div className="form-group row">
      {label !== '' ? (
        <label htmlFor={name} className={classNameLabel}>
          {label}
        </label>
      ) : (
        ''
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value || ''}
        disabled={disabled}
        onChange={setInputs}
        className={`form-control ${alert ? ' parsley-error' : ''} ${className ||
          ''} ${classNameInput}`}
        placeholder={placeholder || ''}
      />
      <ValidationAlert content={alert} />
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  alert: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  setInputs: PropTypes.func,
  classNameLabel: PropTypes.string,
  classNameInput: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextInput;
