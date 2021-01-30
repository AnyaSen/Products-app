import React, { ReactElement, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector } from "react-redux";
import { IAppState } from "../../redux/store";
import { findProductById } from "../../services/findProductById";

import Styles from "./ProductPage.module.scss";
import modifySignSvg from "../../assets/img/modifySign.svg";

import ProductTag from "../../components/shared/ProductTag";
import ArrowButton from "../../components/shared/ArrowButton";
import ButtonWithImg from "../../components/shared/ButtonWithImg";
import { productType } from "../../types";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}
export default function ProductPage({ match }: Props): ReactElement {
  const { id } = match.params;

  const products = useSelector((state: IAppState) => state.app.products);

  const [currentProduct, setCurrentProduct] = useState<productType | undefined>(
    {}
  );

  useEffect(() => {
    const foundProduct = findProductById(products, id);
    setCurrentProduct(foundProduct);
  }, [products, id]);

  const {
    name,
    price,
    description,
    pricePerKg,
    glutenFree,
    lactoseFree,
    vegan
  } = currentProduct;

  return (
    <div className={Styles.ProductPage}>
      {currentProduct && (
        <>
          <div className={Styles.ProductPageHeader}>
            <ArrowButton linkTo="/" />
            <h1>Product information</h1>
            {/* <ButtonWithImg imgSrc={modifySignSvg} altText="Edit" iconHeight="1rem"/> */}
          </div>

          <div className={Styles.ProductInfoAndPhoto}>
            <img
              src={`/products/${id}/img`}
              alt={name}
              className={Styles.ProductPhoto}
            />

            <div className={Styles.ProductInfo}>
              <div className={Styles.ProductNameAndPrice}>
                <h2>{name}</h2>

                {price && (
                  <p className={Styles.ProductPrice}>
                    {price.priceEuros}.
                    {price.priceCents ? price.priceCents : "00"}/{price.unit}
                    <span>{pricePerKg}/kg</span>
                  </p>
                )}
              </div>

              <div className={Styles.ProductTags}>
                {glutenFree && <ProductTag type="gluten-free" />}
                {lactoseFree && <ProductTag type="lactose-free" />}
                {vegan && <ProductTag type="vegan" />}
              </div>
            </div>
          </div>

          <div className={Styles.ProductDescription}>
            <h2>Description</h2>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
}
