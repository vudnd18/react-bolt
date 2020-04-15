import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function FileInput({ name, classNameLabel, label, type, value, setInputs, placeholder }) {
  const uploadFile = e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .post(process.env.UPLOAD_IMAGE_URL, formData, config)
      .then(response => {
        const { data, status } = response;
        if (status === 200) {
          setInputs(name, data[0].location);
        }
      })
      .catch(error => {});
  };

  return (
    <div className="form-group row">
      <label htmlFor={name} className={classNameLabel}>
        {label}
      </label>
      <div className="col-md-10 pd-0">
        <input id={name} name={name} type={type} onChange={uploadFile} className="form-control " />
        {value ? <img src={value} className="wd-20p pd-t-20" alt="main" /> : ''}
      </div>
    </div>
  );
}

FileInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  classNameLabel: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  setInputs: PropTypes.func,
  placeholder: PropTypes.string,
};

export default FileInput;
