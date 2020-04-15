import { useState } from 'react';
import { convertSlug } from '../lib/inputParser';

const useForm = (initModel, submitCallback) => {
  const [inputs, setInputs] = useState(initModel);

  const handleChange = e => {
    e.persist();
    inputs.forEach(i => {
      if (i.name === e.target.name) {
        i.value = i.type === 'checkbox' ? e.target.checked : e.target.value;
        parseInput(i);
        validateInput(i);
      }
      if (Object.prototype.hasOwnProperty.call(i, 'slug')) {
        const slug = inputs.find(input => input.name === i.slug);
        slug.value = convertSlug(i.value);
      }
    });
    setInputs([...inputs]);
  };

  const handleChangeTextArea = (name, value) => {
    const textarea = inputs.find(input => input.name === name);
    textarea.value = value;
    setInputs([...inputs]);
  };

  const handleUploadListImage = (name, value) => {
    const images = inputs.find(input => input.name === name);
    if (Object.prototype.hasOwnProperty.call(images, 'value')) {
      const previous = images.value;
      images.value = [...previous, ...value];
    } else {
      images.value = value;
    }
    setInputs([...inputs]);
  };

  const handleSubmit = e => {
    e && e.preventDefault();
    inputs.forEach(i => validateInput(i));
    inputs.some(i => i.alert) ? setInputs([...inputs]) : submitCallback();
  };

  const deleteImage = (name, value) => {
    const images = inputs.find(input => input.name === name);
    const removeImage = images.value.filter(image => image !== value);
    images.value = removeImage;
    setInputs([...inputs]);
  };

  const parseInput = input =>
    (input.value = input.parseFun ? input.parseFun(input.value) : input.value);

  const validateInput = input => {
    let alert = null;
    input.validators &&
      input.validators.forEach(
        v => (alert = v.isValidFun && !v.isValidFun(input.value) ? v.alert : alert),
      );
    input.alert = alert;
  };

  return [
    inputs,
    handleChange,
    handleSubmit,
    handleChangeTextArea,
    handleUploadListImage,
    deleteImage,
  ];
};

export default useForm;
