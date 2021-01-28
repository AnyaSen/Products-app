import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import { IAppState } from "../../redux/store";
import { productType } from "../../types";

import Styles from "./AvailableProductsList.module.scss";
import plusSignSvg from "../../assets/img/plusSign.svg";

import Product from "../Product";
import ButtonWithImg from "../shared/ButtonWithImg";

export default function AvailableProductsList(): ReactElement {
  const products = useSelector((state: IAppState) => state.app.products);

  return (
    <div className={Styles.AvailableProductsListContainer}>
      <div className={Styles.AvailableProductsListHeader}>
        <h1>Available products</h1>
        <ButtonWithImg imgSrc={plusSignSvg} altText="Create Product" />
      </div>

      <div className={Styles.AvailableProductsList}>
        {products.map((product: productType) => {
          const { name, price, _id, pricePerKg } = product;
          const { priceEuros, priceCents, unit } = price;
          return (
            <Product
              name={name}
              key={_id}
              priceEuros={priceEuros}
              priceCents={priceCents}
              unit={unit}
              pricePerKg={pricePerKg}
              img={`/products/${_id}/img`}
            />
          );
        })}
      </div>
    </div>
  );
}
