import React, { ReactElement, ChangeEvent } from "react";
import {
  setGlutenFree,
  setLactoseFree,
  setVegan
} from "../../../../redux/actions";
import { useDispatch } from "react-redux";

import Styles from "./CheckboxesSubsection.module.scss";

import Checkbox from "../../../shared/Checkbox";

export default function CheckboxesSubsection(): ReactElement {
  const dispatch = useDispatch();

  const handleGlutenFreeChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGlutenFree(event.target.checked));
  };
  const handleLactoseFreeChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setLactoseFree(event.target.checked));
  };
  const handleVeganChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setVegan(event.target.checked));
  };
  return (
    <div className={Styles.CheckboxesSubsection}>
      <Checkbox
        label="Gluten-free"
        name="glutenFree"
        value="glutenFree"
        onChange={handleGlutenFreeChange}
      />
      <Checkbox
        label="Lactose-free"
        name="lactoseFree"
        value="lactoseFree"
        onChange={handleLactoseFreeChange}
      />
      <Checkbox
        label="Vegan"
        name="vegan"
        value="vegan"
        onChange={handleVeganChange}
      />
    </div>
  );
}
