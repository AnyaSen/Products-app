import React, { ReactElement, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../../redux/store";
import {
  setName,
  setPriceEuros,
  setPriceCents,
  setPricePerKg,
  setUnit
} from "../../../redux/actions";

import InputField from "../../shared/InputField";
import CheckboxesSubsection from "./CheckboxesSubsection";

export default function GeneralInfoSection(): ReactElement {
  const { name, priceEuros, priceCents, pricePerKg, unit } = useSelector(
    (state: IAppState) => state.form
  );

  const dispatch = useDispatch();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  };
  const handlePriceEurosChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPriceEuros(event.target.value));
  };
  const handlePriceCentsChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPriceCents(event.target.value));
  };
  const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUnit(event.target.value));
  };
  const handlePricePerKgChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPricePerKg(event.target.value));
  };

  return (
    <div>
      <h2>General information</h2>
      <InputField
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <InputField
        placeholder="Price(euros)"
        name="priceEuros"
        value={priceEuros}
        onChange={handlePriceEurosChange}
      />
      <InputField
        placeholder="Price(cents)"
        name="priceCents"
        value={priceCents}
        onChange={handlePriceCentsChange}
      />
      <InputField
        placeholder="Unit"
        name="unit"
        value={unit}
        onChange={handleUnitChange}
      />
      <InputField
        placeholder="Price(per kg)"
        name="pricePerKg"
        value={pricePerKg}
        onChange={handlePricePerKgChange}
      />

      <CheckboxesSubsection />
    </div>
  );
}
