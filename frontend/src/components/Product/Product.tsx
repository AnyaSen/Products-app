import React, { ReactElement } from "react";

import Styles from "./Product.module.scss";
import modifySignSvg from "../../assets/img/modifySign.svg";
import ButtonWithImg from "../shared/ButtonWithImg";
import PricePerUnit from "../shared/PricePerUnit";

interface Props {
  name: string;
  priceEuros: number;
  priceCents?: number;
  unit: string;
  pricePerKg?: number;
  img: string;
}

export default function Product({
  name,
  unit,
  pricePerKg,
  img,
  priceEuros,
  priceCents
}: Props): ReactElement {
  return (
    <div className={Styles.Product}>
      <img src={img} alt={name} className={Styles.ProductImage} />

      <div className={Styles.ProductPrice}>
        <PricePerUnit
          priceCents={priceCents ? priceCents : "00"}
          priceEuros={priceEuros}
          unit={unit}
        />

        {pricePerKg && (
          <p className={Styles.ProductPricePerKg}>{pricePerKg}/kg </p>
        )}
      </div>

      <p> {name}</p>

      <ButtonWithImg imgSrc={modifySignSvg} altText="Edit" />
    </div>
  );
}
