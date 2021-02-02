import React, {
  ReactElement,
  FormEvent,
  useState,
  useRef,
  useEffect
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../redux/store";
import {
  clearForm,
  postProduct,
  enableSubmit,
  disableSubmit,
  fetchProducts
} from "../../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { useHistory } from "react-router";

import Styles from "./ProductForm.module.scss";
import doneSignSvg from "../../assets/img/doneSign.svg";
import cancelSignSvg from "../../assets/img/cancelSign.svg";

import GeneralInfoSection from "./GeneralInfoSection";
import DropzoneComponent from "../shared/Dropzone";
import ButtonWithImg from "../shared/ButtonWithImg";
import ConfirmationCard from "../shared/ConfirmationCard";
import DescriptionSection from "./DescriptionSection/DescriptionSection";
import ArrowButton from "../shared/ArrowButton";
import ErrorPage from "../../pages/ErrorPage";

export default function ProductForm(): ReactElement {
  const dispatch: ThunkDispatch<{}, {}, any> = useDispatch();

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

  const { form } = useSelector((state: IAppState) => state);
  const { enableSubmitButton, isPostProductError, isLoading } = useSelector(
    (state: IAppState) => state.app
  );

  const readyToSubmit =
    name !== "" && priceEuros !== "" && description !== "" && file.length === 1;

  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const product = {
      name,
      price: { priceEuros, priceCents },
      pricePerKg,
      description,
      glutenFree,
      lactoseFree,
      vegan
    };

    if (file) {
      const fd = new FormData();

      fd.append("upload", file[0], file[0].name);

      const clearFormAndRedirect = () => {
        if (!isPostProductError && !isLoading) {
          dispatch(clearForm());
          history.push("/");
        }
      };

      const postNewAndGetAllProducts = async () => {
        await dispatch(postProduct(product, fd));
        return dispatch(fetchProducts());
      };

      await postNewAndGetAllProducts();
      return clearFormAndRedirect();
    }
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

  useEffect(() => {
    if (readyToSubmit && !enableSubmitButton) {
      dispatch(enableSubmit());
    } else if (!readyToSubmit && enableSubmitButton) {
      dispatch(disableSubmit());
    }
  }, [form, readyToSubmit, enableSubmitButton]);

  if (isPostProductError)
    return (
      <ErrorPage text="Sorry, something went wrong during the submission" />
    );

  return (
    <form onSubmit={handleSubmit} className={Styles.ProductForm}>
      <div className={Styles.ProductFormHeaderContainer}>
        <div className={Styles.ProductFormHeader}>
          <div>
            <ArrowButton linkTo="/" />
            <h1>Product information</h1>
          </div>

          <div>
            <ButtonWithImg
              imgSrc={doneSignSvg}
              altText="Submit"
              buttonType="submit"
              filled
              disabled={enableSubmitButton ? false : true}
              dataCy="submit-button"
            />

            <ButtonWithImg
              onClick={() => setShowCancelConfirmation(true)}
              imgSrc={cancelSignSvg}
              altText="Cancel"
              buttonType="button"
              dataCy="cancel-button"
            />
          </div>
        </div>

        {showCancelConfirmation && (
          <ConfirmationCard
            text="Are you sure you want to leave?"
            onClickYes={handleLeaveFormClick}
            onClickNo={() => setShowCancelConfirmation(false)}
            onClickYesLinkTo="/"
            confirmationCardRef={confitmationCard}
          />
        )}
      </div>
      <div className={Styles.DropzoneGeneralInfoAndDescriptionContainer}>
        <div className={Styles.DropzoneGeneralInfoAndDescription}>
          <div className={Styles.DropzoneAndGeneralInfo}>
            <DropzoneComponent />
            <GeneralInfoSection />
          </div>
          <DescriptionSection />{" "}
        </div>
      </div>
    </form>
  );
}
