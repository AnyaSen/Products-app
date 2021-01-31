import React, { ReactElement, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../../redux/store";
import { setDescription } from "../../../redux/actions";

import Styles from "./DescriptionSection.module.scss";

import TextArea from "../../shared/TextArea";

export default function DescriptionSection(): ReactElement {
  const { description } = useSelector((state: IAppState) => state.form);

  const dispatch = useDispatch();

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setDescription(event.target.value));
  };
  return (
    <div className={Styles.DescriptionSection}>
      <h2>Description</h2>
      <TextArea
        placeholder="Describe the product..."
        onChange={handleDescriptionChange}
        value={description}
      />
    </div>
  );
}
