import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import Styles from "./ProductCard.module.scss";
import modifySignSvg from "../../assets/img/modifySign.svg";
import ButtonWithImg from "../shared/ButtonWithImg";
import PricePerUnit from "../shared/PricePerUnit";

interface Props {
  name: string;
  priceEuros: number;
  priceCents?: number;
  pricePerKg?: number;
  img: string;
  id: string;
}

export default function ProductCard({
  name,
  pricePerKg,
  img,
  priceEuros,
  priceCents,
  id
}: Props): ReactElement {
  return (
    <div className={Styles.ProductContainer}>
      <Link to={`/product/${id}`} className={Styles.Product}>
        <img src={img} alt={name} className={Styles.ProductImage} />

        <div className={Styles.ProductPrice}>
          <PricePerUnit
            priceCents={priceCents ? priceCents : "00"}
            priceEuros={priceEuros}
          />

          {pricePerKg && (
            <p className={Styles.ProductPricePerKg}>{pricePerKg}/kg </p>
          )}
        </div>

        <p> {name}</p>
      </Link>

      <ButtonWithImg imgSrc={modifySignSvg} altText="Edit" iconHeight="1rem" />
    </div>
  );
}
