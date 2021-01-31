import React, { ReactElement, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../../redux/store";
import {
  setName,
  setPriceEuros,
  setPriceCents,
  setPricePerKg
} from "../../../redux/actions";

import Styles from "./GeneralInfoSection.module.scss";

import InputField from "../../shared/InputField";
import CheckboxesSubsection from "./CheckboxesSubsection";

export default function GeneralInfoSection(): ReactElement {
  const { name, priceEuros, priceCents, pricePerKg } = useSelector(
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

  const handlePricePerKgChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPricePerKg(event.target.value));
  };

  return (
    <div className={Styles.GeneralInfoSection}>
      <div>
        <h2>General information</h2>
        <InputField
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <div className={Styles.PricePerUnitInfo}>
          <div className={Styles.PriceEurosAndCents}>
            <InputField
              small
              placeholder="Euros"
              name="priceEuros"
              value={priceEuros}
              onChange={handlePriceEurosChange}
              type="number"
              required
            />
            <InputField
              small
              placeholder="Cents"
              name="priceCents"
              value={priceCents}
              onChange={handlePriceCentsChange}
              type="number"
            />
          </div>
          <p className={Styles.unit}>/ kpl</p>
        </div>

        <InputField
          placeholder="Price (per kg)"
          name="pricePerKg"
          value={pricePerKg}
          onChange={handlePricePerKgChange}
          type="number"
        />
      </div>

      <CheckboxesSubsection />
    </div>
  );
}
