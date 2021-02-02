import React, { ReactElement, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector } from "react-redux";
import { IAppState } from "../../redux/store";
import { findProductById } from "../../services/findProductById";

import Styles from "./ProductPage.module.scss";

import ProductTag from "../../components/shared/ProductTag";
import ArrowButton from "../../components/shared/ArrowButton";
import { productType } from "../../types";
import Layout from "../../components/shared/Layout";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}
export default function ProductPage({ match }: Props): ReactElement {
  const { id } = match.params;

  const products = useSelector((state: IAppState) => state.app.products);

  const [currentProduct, setCurrentProduct] = useState<productType | undefined>(
    undefined
  );

  useEffect(() => {
    const foundProduct = findProductById(products, id);
    setCurrentProduct(foundProduct);
  }, [products, id]);

  return (
    <Layout>
      <div className={Styles.ProductPage} data-cy="product-page">
        {currentProduct && (
          <>
            <div className={Styles.ProductPageHeader}>
              <ArrowButton linkTo="/" />
              <h1>Product information</h1>
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
