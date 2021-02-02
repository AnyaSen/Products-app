import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IAppState } from "../../redux/store";
import { productType } from "../../types";

import Styles from "./AvailableProductsList.module.scss";
import plusSignSvg from "../../assets/img/plusSign.svg";

import ProductCard from "../ProductCard";
import ButtonWithImg from "../shared/ButtonWithImg";

export default function AvailableProductsList(): ReactElement {
  const products = useSelector((state: IAppState) => state.app.products);

  return (
    <div className={Styles.AvailableProductsListContainer}>
      <div className={Styles.AvailableProductsListHeader}>
        <h1>Available products</h1>

        <Link to="/create" data-cy="create-product-button">
          <ButtonWithImg imgSrc={plusSignSvg} altText="Create Product" filled />
        </Link>
      </div>
      {products.length !== 0 ? (
        <>
          <div className={Styles.AvailableProductsList} data-cy="products-list">
            {products.map((product: productType) => {
              const { name, price, _id, pricePerKg } = product;
              const { priceEuros, priceCents } = price;
              return (
                <ProductCard
                  id={_id}
                  name={name}
                  key={_id}
                  priceEuros={priceEuros}
                  priceCents={priceCents}
                  pricePerKg={pricePerKg}
                  img={`/products/${_id}/img`}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h3>
          No products found. Press the plus button above to add a product.
        </h3>
      )}
    </div>
  );
}
