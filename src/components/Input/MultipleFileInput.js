import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MultipleFileInput({
  name,
  classNameLabel,
  label,
  type,
  value,
  setInputs,
  placeholder,
  deleteImage,
}) {
  const uploadMultiFile = e => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(i, file);
    });
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
          const path = data.map(image => image.location);
          setInputs(name, path);
        }
      })
      .catch(error => {});
  };

  const renderListImage = images => {
    let xhtml = null;
    xhtml = (
      <div className="row mg-t-10">
        {images.map(image => {
          return (
            <div className="col col-md-2" key={image}>
              <img src={image} className="w-100" alt={image} />
              <button
                type="button"
                className="btn btn-danger mg-t-10"
                onClick={() => deleteImage(name, image)}
              >
                Delete Image
              </button>
            </div>
          );
        })}
      </div>
    );
    return xhtml;
  };

  return (
    <div className="form-group row">
      <label htmlFor={name} className={classNameLabel}>
        {label}
      </label>
      <div className="col-md-10 pd-0">
        <input
          id={name}
          name={name}
          type="file"
          onChange={uploadMultiFile}
          className="form-control"
          multiple
        />
        {value && value.length > 0 ? renderListImage(value) : ''}
      </div>
    </div>
  );
}

MultipleFileInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  classNameLabel: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.array,
  setInputs: PropTypes.func,
  placeholder: PropTypes.string,
  deleteImage: PropTypes.func,
};

export default MultipleFileInput;
