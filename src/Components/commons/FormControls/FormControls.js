import React from "react";
import {
  formInputWrapper,
  error,
  errorMessage,
} from "./FormControls.module.scss";
import cn from 'classnames'

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={cn(formInputWrapper, {[error]: hasError})} >
      <textarea {...input} {...props} />
      {hasError && (
        <div className={cn('alert alert-danger p-2', [errorMessage])}>
          {meta.error}
        </div>
      )}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={cn([formInputWrapper], {[error]: hasError})}>
      <input {...input} {...props} />
      {(hasError && meta.error != "empty") && (
        <div className={cn('alert alert-danger p-2', [errorMessage])}>
          {meta.error}
        </div>
      )}
    </div>
  );
};

export const FileInput = ({ input, meta, ...props }) => {
  const hasError = false;
  return (
    <div className={cn([formInputWrapper], {[error]: hasError})}>
      <input onChange={e => input.onChange(e.target.files[0])} type="file" {...input} {...props} />
    </div>
  );
};
