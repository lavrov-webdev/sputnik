import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import classes from "../ProfileInfo.module.css";
import cn from 'classnames'

const UploadPhotoForm = ({ uploadFile, closeModal }) => {
  const [filePath, setFilePath] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [file, setFile] = useState("");

  const setPreview = (file) => {
    const url = URL.createObjectURL(file);
    setFilePath(url);
  };

  const clearInpt = () => {
    setFilePath(null);
    setInputValue("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    uploadFile(file);
    closeModal();
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
    setPreview(acceptedFiles[0]);
    setFile(acceptedFiles[0]);
    setInputValue(acceptedFiles[0].name);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <form onSubmit={submitForm} className={classes.form}>
      {!filePath ? (
        <label {...getRootProps()}>
          <input {...getInputProps()} className={classes.hiddenInput} />
          <div className={classes.fakeFileUnput}>
            <div>
              <div>UPLOAD PHOTO</div>
              <div className='d-flex justify-center mt-2'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  ariaHidden="true"
                  role="img"
                  width="175"
                  height="175"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <defs />
                  <path
                    d="M19 26a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z"
                    fill="currentColor"
                  />
                  <path
                    d="M27 29H11a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3.28l.543-1.632A2 2 0 0 1 16.721 13h4.558a2 2 0 0 1 1.898 1.368L23.72 16H27a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2zm-16-2h16v-9h-4.72l-1-3h-4.56l-1 3H11z"
                    fill="currentColor"
                  />
                  <path d="M27 11h2v2h-2z" fill="currentColor" />
                  <path d="M27 7h2v2h-2z" fill="currentColor" />
                  <path d="M27 3h2v2h-2z" fill="currentColor" />
                  <path d="M23 3h2v2h-2z" fill="currentColor" />
                  <path d="M19 3h2v2h-2z" fill="currentColor" />
                  <path d="M15 3h2v2h-2z" fill="currentColor" />
                  <path d="M11 3h2v2h-2z" fill="currentColor" />
                  <path d="M7 3h2v2H7z" fill="currentColor" />
                  <path d="M3 3h2v2H3z" fill="currentColor" />
                  <path d="M3 7h2v2H3z" fill="currentColor" />
                  <path d="M3 11h2v2H3z" fill="currentColor" />
                  <path d="M3 15h2v2H3z" fill="currentColor" />
                  <path d="M3 19h2v2H3z" fill="currentColor" />
                  <path d="M3 23h2v2H3z" fill="currentColor" />
                  <path d="M3 27h2v2H3z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </label>
      ) : (
        <div>
          <button
            onClick={clearInpt}
            className={cn('btn btn-danger', [classes.clearButton])}
          >
            X
          </button>
          <img className={classes.previewImage} src={filePath} />
        </div>
      )}
      <div className="row mt-5">
        <div className="col-5">
          <button onClick={closeModal} className="btn btn-danger w-100">
            Back
          </button>
        </div>
        <div className="col-7">
          <button
            disabled={!inputValue}
            className='btn btn-success w-100'
            typee="submit"
          >
            Upload
          </button>
        </div>
      </div>
    </form>
  );
};

export default UploadPhotoForm;
