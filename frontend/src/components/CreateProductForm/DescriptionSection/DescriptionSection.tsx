import React, { ReactElement, ChangeEvent } from "react";
import TextArea from "../../shared/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../../redux/store";
import { setDescription } from "../../../redux/actions";

export default function DescriptionSection(): ReactElement {
  const { description } = useSelector((state: IAppState) => state.form);

  const dispatch = useDispatch();

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setDescription(event.target.value));
  };
  return (
    <div>
      <h2>Description</h2>
      <TextArea
        placeholder="Describe the product..."
        onChange={handleDescriptionChange}
        value={description}
      />
    </div>
  );
}
