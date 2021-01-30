import React, { ReactElement, FormEvent } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../../redux/store";

import Styles from "./CreateProductForm.module.scss";
import doneSignSvg from "../../assets/img/doneSign.svg";
import cancelSignSvg from "../../assets/img/cancelSign.svg";

import GeneralInfoSection from "./GeneralInfoSection";
import DescriptionSection from "./DescriptionSection";
import DropzoneComponent from "../shared/Dropzone";
import ButtonWithImg from "../shared/ButtonWithImg";

export default function CreateProductForm(): ReactElement {
  const {
    name,
    priceEuros,
    priceCents,
    unit,
    pricePerKg,
    glutenFree,
    lactoseFree,
    vegan,
    description,
    file
  } = useSelector((state: IAppState) => state.form);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      name,
      priceEuros,
      priceCents,
      unit,
      pricePerKg,
      glutenFree,
      lactoseFree,
      vegan,
      description,
      file
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Product information</h1>
      <ButtonWithImg
        imgSrc={doneSignSvg}
        altText="Submit"
        buttonType="submit"
        filled
      />

      <ButtonWithImg
        imgSrc={cancelSignSvg}
        altText="Cancel"
        buttonType="button"
      />

      <DropzoneComponent />
      <GeneralInfoSection />
      <DescriptionSection />
    </form>
  );
}
