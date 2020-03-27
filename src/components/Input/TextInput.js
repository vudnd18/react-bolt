import React from 'react';
import PropTypes from 'prop-types';
import ValidationAlert from './ValidationAlert';

function TextInput({ name, label, type, value, alert, setInputs, placeholder, className }) {
  return (
    <div className="form-group">
      {label !== '' ? (
        <label htmlFor={name} className="">
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
        onChange={setInputs}
        className={`form-control ${alert ? ' parsley-error' : ''} ${className || ''} `}
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
};

export default TextInput;
