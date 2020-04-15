import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';

function TextareaInput({
  name,
  label,
  type,
  value = '',
  alert,
  disabled = false,
  setInputs,
  placeholder,
  className,
  classNameLabel = '',
  classNameInput = '',
}) {
  function handleEditorChange(content, editor) {
    setInputs(name, content);
  }
  return (
    <div className="form-group row">
      {label !== '' ? (
        <label htmlFor={name} className={classNameLabel}>
          {label}
        </label>
      ) : (
        ''
      )}
      <div className="pd-0 col-sm-10">
        <Editor
          textareaName={name}
          apiKey="ecfc5fardrifzglxaata0ex77c6zp45jk8lqm3lcriwnp9zh"
          initialValue={value}
          value={value}
          init={{
            height: 500,
            menubar: 'file edit view insert format tools table help',
            plugins: [
              'print preview powerpaste casechange importcss tinydrive',
              'searchreplace autolink autosave save directionality advcode',
              'visualblocks visualchars fullscreen image link media mediaembed',
              'template codesample table charmap hr pagebreak nonbreaking anchor',
              'toc insertdatetime advlist lists checklist wordcount tinymcespellchecker',
              'a11ychecker textpattern noneditable help formatpainter pageembed charmap',
              'mentions quickbars linkchecker emoticons',
            ],
            toolbar:
              'undo redo | bold italic underline strikethrough | \n' +
              'fontselect fontsizeselect formatselect | \n' +
              'alignleft aligncenter alignright alignjustify | \n' +
              'outdent indent |  numlist bullist checklist | \n' +
              'forecolor backcolor casechange permanentpen formatpainter \n' +
              'removeformat | pagebreak | charmap emoticons | fullscreen  \n' +
              'preview save print | insertfile image media pageembed template \n' +
              'link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
            image_caption: true,
            // images_upload_url: 'http://localhost:9000/images/upload',
            images_upload_handler: (blobInfo, success, failure) => {
              const xhr = new XMLHttpRequest();
              const formData = new FormData();
              xhr.withCredentials = false;
              xhr.open('POST', process.env.UPLOAD_IMAGE_URL);
              xhr.onload = () => {
                let json;
                if (xhr.status !== 200) {
                  failure(`HTTP Error:  ${xhr.status}`);
                  return;
                }
                json = JSON.parse(xhr.responseText);
                json = json[0];
                if (!json || typeof json.location !== 'string') {
                  failure(`Invalid JSON: ${xhr.responseText}`);
                  return;
                }
                success(json.location);
              };
              formData.append('file', blobInfo.blob());
              xhr.send(formData);
            },
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
}

TextareaInput.propTypes = {
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

export default TextareaInput;
