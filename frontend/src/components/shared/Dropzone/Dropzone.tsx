import React, { ReactElement } from "react";
import Dropzone from "react-dropzone";
import { setFile } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default function DropzoneComponent(): ReactElement {
  const dispatch = useDispatch();

  const onDrop = (acceptedFiles: File[]) => {
    dispatch(setFile(acceptedFiles));
  };

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => {
        return (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop files here...</p>
            ) : (
              <p>
                Try dropping some files here, or click to select files to
                upload.
              </p>
            )}
          </div>
        );
      }}
    </Dropzone>
  );
}
