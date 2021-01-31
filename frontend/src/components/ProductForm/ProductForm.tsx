import React, { ReactElement, FormEvent, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../redux/store";
import { clearForm } from "../../redux/actions";

import Styles from "./ProductForm.module.scss";
import doneSignSvg from "../../assets/img/doneSign.svg";
import cancelSignSvg from "../../assets/img/cancelSign.svg";

import GeneralInfoSection from "./GeneralInfoSection";
import DescriptionSection from "./DescriptionSection";
import DropzoneComponent from "../shared/Dropzone";
import ButtonWithImg from "../shared/ButtonWithImg";
import ConfirmationCard from "../shared/ConfirmationCard";
import { useEffect } from "react";

export default function ProductForm(): ReactElement {
  const dispatch = useDispatch();

  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  const {
    name,
    priceEuros,
    priceCents,
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
      pricePerKg,
      glutenFree,
      lactoseFree,
      vegan,
      description,
      file
    );
    dispatch(clearForm());
  };

  const handleLeaveFormClick = () => {
    dispatch(clearForm());
  };

  const confitmationCard = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const handleClickOutsideConfirmation = (e: Event) => {
      if (!e.composedPath().includes(confitmationCard.current)) {
        setShowCancelConfirmation(false);

        return;
      }
    };

    document.addEventListener("mousedown", handleClickOutsideConfirmation);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideConfirmation);
    };
  }, [confitmationCard]);

  return (
    <form onSubmit={handleSubmit} className={Styles.ProductForm}>
      <div className={Styles.ProductFormHeaderContainer}>
        <div className={Styles.ProductFormHeader}>
          <h1>Product information</h1>
          <ButtonWithImg
            imgSrc={doneSignSvg}
            altText="Submit"
            buttonType="submit"
            filled
          />

          <ButtonWithImg
            onClick={() => setShowCancelConfirmation(true)}
            imgSrc={cancelSignSvg}
            altText="Cancel"
            buttonType="button"
          />
        </div>

        {showCancelConfirmation && (
          <ConfirmationCard
            onClickYes={handleLeaveFormClick}
            onClickNo={() => setShowCancelConfirmation(false)}
            onClickYesLinkTo="/"
            confirmationCardRef={confitmationCard}
          />
        )}
      </div>

      <div className={Styles.DropzoneAndGeneralInfo}>
        <DropzoneComponent />
        <GeneralInfoSection />
      </div>

      <DescriptionSection />
    </form>
  );
}
