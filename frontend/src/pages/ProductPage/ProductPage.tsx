import React, { ReactElement, useEffect, useState, useRef } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../redux/store";
import { findProductById } from "../../services/findProductById";
import { ThunkDispatch } from "redux-thunk";
import { deleteProduct, deleteProductLocally } from "../../redux/actions";
import { productType } from "../../types";

import Styles from "./ProductPage.module.scss";
import trashSignSvg from "../../assets/img/trashSign.svg";

import ProductTag from "../../components/shared/ProductTag";
import ArrowButton from "../../components/shared/ArrowButton";
import Layout from "../../components/shared/Layout";
import ButtonWithImg from "../../components/shared/ButtonWithImg";

import ConfirmationCard from "../../components/shared/ConfirmationCard";
import LoadingPage from "../LoadingPage";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}
export default function ProductPage({ match }: Props): ReactElement {
  const dispatch: ThunkDispatch<{}, {}, any> = useDispatch();

  const { id } = match.params;

  const { products, isDeleteDone, isDeleteLoading } = useSelector(
    (state: IAppState) => state.app
  );

  const [currentProduct, setCurrentProduct] = useState<productType | undefined>(
    undefined
  );

  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(
    false
  );

  useEffect(() => {
    const foundProduct = findProductById(products, id);
    setCurrentProduct(foundProduct);
  }, [products, id]);

  const handleDeleteProductClick = () => {
    dispatch(deleteProduct(id));
    deleteProductLocally(id);
  };

  const confitmationCard = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const handleClickOutsideConfirmation = (e: Event) => {
      if (!e.composedPath().includes(confitmationCard.current)) {
        setIsDeleteConfirmationOpen(false);

        return;
      }
    };
    document.addEventListener("mousedown", handleClickOutsideConfirmation);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideConfirmation);
    };
  }, [confitmationCard]);

  const history = useHistory();

  useEffect(() => {
    isDeleteDone && history.push("/");
  }, [isDeleteDone]);

  if (isDeleteLoading) return <LoadingPage />;

  return (
    <Layout>
      <div className={Styles.ProductPage} data-cy="product-page">
        {currentProduct && (
          <>
            <div className={Styles.ProductPageHeaderContainer}>
              <div className={Styles.ProductPageHeader}>
                <ArrowButton linkTo="/" />

                <h1>Product information</h1>

                <ButtonWithImg
                  imgSrc={trashSignSvg}
                  altText="Delete"
                  iconHeight="1rem"
                  onClick={() => setIsDeleteConfirmationOpen(true)}
                  dataCy="delete-button"
                />
              </div>
              {isDeleteConfirmationOpen && (
                <div
                  className={Styles.ConfirmationCard}
                  data-cy="confirmation-card"
                >
                  <ConfirmationCard
                    text="Are you sure you want to delete the product?"
                    onClickYes={handleDeleteProductClick}
                    onClickNo={() => setIsDeleteConfirmationOpen(false)}
                    confirmationCardRef={confitmationCard}
                  />
                </div>
              )}
            </div>

            <div className={Styles.ProductInfoAndPhoto}>
              <img
                src={`/products/${id}/img`}
                alt={currentProduct.name}
                className={Styles.ProductPhoto}
              />

              <div className={Styles.ProductInfo}>
                <div className={Styles.ProductNameAndPrice}>
                  <h2>{currentProduct.name}</h2>

                  {currentProduct.price && (
                    <p className={Styles.ProductPrice}>
                      {currentProduct.price.priceEuros}.
                      {currentProduct.price.priceCents
                        ? currentProduct.price.priceCents
                        : "00"}
                      /kpl
                      {currentProduct.pricePerKg && (
                        <span>{currentProduct.pricePerKg}/kg</span>
                      )}
                    </p>
                  )}
                </div>

                <div className={Styles.ProductTags}>
                  {currentProduct.glutenFree && (
                    <ProductTag type="gluten-free" />
                  )}
                  {currentProduct.lactoseFree && (
                    <ProductTag type="lactose-free" />
                  )}
                  {currentProduct.vegan && <ProductTag type="vegan" />}
                </div>
              </div>
            </div>

            <div className={Styles.ProductDescription}>
              <h2>Description</h2>
              <p>{currentProduct.description}</p>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
