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

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => {
        return (
          <div {...getRootProps()} className={Styles.DropzoneContainer}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop files here...</p>
            ) : (
              <div className={Styles.Dropzone}>
                <ButtonWithImg imgSrc={addImgSignCvg} altText="Add an image" />
              </div>
            )}
          </div>
        );
      }}
    </Dropzone>
  );
}
