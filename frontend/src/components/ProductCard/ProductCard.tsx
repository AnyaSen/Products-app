import React, { ReactElement, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { trimLongName } from "../../services/trimString";
import { modifyPriceCents } from "../../services/modifyPrice";

import Styles from "./ProductCard.module.scss";
import trashSignSvg from "../../assets/img/trashSign.svg";

import PricePerUnit from "../shared/PricePerUnit";
import ButtonWithImg from "../shared/ButtonWithImg";
import Button from "../shared/Button";
import { deleteProduct, deleteProductLocally } from "../../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../redux/store";
import Loader from "../shared/Loader";

interface Props {
  name: string;
  priceEuros: number;
  priceCents?: number;
  pricePerKg?: number;
  img: string;
  id: string | undefined;
}

export default function ProductCard({
  name,
  pricePerKg,
  img,
  priceEuros,
  priceCents,
  id
}: Props): ReactElement {
  const dispatch: ThunkDispatch<{}, {}, any> = useDispatch();
  const { isDeleteLoading } = useSelector((state: IAppState) => state.app);

  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(
    false
  );
  const handleDeleteProductClick = (id: string | undefined) => {
    if (id) {
      dispatch(deleteProduct(id));
      deleteProductLocally(id);
    }
  };

  const deleteConfirmationRef = useRef() as React.MutableRefObject<
    HTMLInputElement
  >;

  useEffect(() => {
    const handleClickOutsideConfirmation = (e: Event) => {
      if (!e.composedPath().includes(deleteConfirmationRef.current)) {
        setIsDeleteConfirmationOpen(false);

        return;
      }
    };
    document.addEventListener("mousedown", handleClickOutsideConfirmation);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideConfirmation);
    };
  }, [deleteConfirmationRef]);

  return (
    <div className={Styles.ProductContainer} data-cy={`${name}-product`}>
      <Link to={`/product/${id}`} className={Styles.Product}>
        <img src={img} alt={name} className={Styles.ProductImage} />

        <div className={Styles.ProductPrice}>
          <PricePerUnit
            priceCents={priceCents ? modifyPriceCents(priceCents) : "00"}
            priceEuros={priceEuros}
          />

          {pricePerKg && (
            <p className={Styles.ProductPricePerKg}>{pricePerKg}/kg </p>
          )}
        </div>

        <p className={!pricePerKg ? Styles.ProductNameWithoutPricePerKg : ""}>
          {trimLongName(name, 10)}
        </p>
      </Link>

      {isDeleteLoading && <Loader small />}

      {isDeleteConfirmationOpen && !isDeleteLoading && (
        <div
          className={Styles.DeleteConfirmationButtons}
          ref={deleteConfirmationRef}
        >
          <Button
            text="Cancel"
            onClick={() => setIsDeleteConfirmationOpen(false)}
            filled
          />
          <Button text="Delete" onClick={() => handleDeleteProductClick(id)} />
        </div>
      )}

      {!isDeleteConfirmationOpen && !isDeleteLoading && (
        <ButtonWithImg
          imgSrc={trashSignSvg}
          altText="Delete"
          iconHeight="1rem"
          onClick={() => setIsDeleteConfirmationOpen(true)}
          dataCy="delete-button"
        />
      )}
    </div>
  );
}
