import React, { ReactElement } from "react";

import Styles from "./Dropzone.module.scss";
import addImgSignCvg from "../../../assets/img/addImgSign.svg";

import Dropzone from "react-dropzone";
import { setFile } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import ButtonWithImg from "../ButtonWithImg";

export default function DropzoneComponent(): ReactElement {
  const dispatch = useDispatch();

  const onDrop = (acceptedFiles: File[]) => {
    dispatch(setFile(acceptedFiles));
  };

  const maxSize = 1000000;

  return (
    <Dropzone
      onDrop={onDrop}
      accept="image/jpeg, image/jpg, image/png"
      minSize={0}
      maxSize={maxSize}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        acceptedFiles,
        fileRejections
      }) => {
        const isFileTooLarge = fileRejections.length > 0;

        const isFileAccepted = acceptedFiles.length > 0;

        return (
          <div {...getRootProps()} className={Styles.DropzoneContainer}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop a file here...</p>
            ) : (
              <div className={Styles.Dropzone}>
                <ButtonWithImg
                  imgSrc={addImgSignCvg}
                  altText="Add an image"
                  buttonType="button"
                />
              </div>
            )}
            {isDragReject && (
              <p>
                The file must be <span>jpeg, jpg or png</span>
              </p>
            )}
            {isFileAccepted && <h3>{acceptedFiles[0].name}</h3>}
            {isFileTooLarge && <p>The file is too large</p>}
          </div>
        );
      }}
    </Dropzone>
  );
}
