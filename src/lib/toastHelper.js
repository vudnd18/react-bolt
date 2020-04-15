import { toast } from 'react-toastify';
import React from 'react';

export function toastSuccess(message) {
  if (message) {
    toast.success(message);
  }
}

export function toastError(error) {
  if (error) {
    const { status, data, statusText } = error;
    let message = null;
    if (data && data.message) message = data.message;
    else message = statusText;
    toast.error(
      <div>
        {status} {message} <br />
      </div>,
    );
  }
}
