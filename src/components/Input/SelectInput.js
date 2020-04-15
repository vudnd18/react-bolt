import React from 'react';
import PropTypes from 'prop-types';
import ValidationAlert from './ValidationAlert';

function SelectInput({
  name,
  label,
  type,
  value,
  alert,
  options,
  setInputs,
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
      <select
        id={name}
        name={name}
        type={type}
        value={value || ''}
        onChange={setInputs}
        className={`form-control ${alert ? ' parsley-error' : ''} ${className ||
          ''} ${classNameInput}`}
      >
        {options &&
          options.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
      </select>
      <ValidationAlert content={alert} />
    </div>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  alert: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string,
  setInputs: PropTypes.func,
  classNameLabel: PropTypes.string,
  classNameInput: PropTypes.string,
};

export default SelectInput;
