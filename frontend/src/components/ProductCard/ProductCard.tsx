import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { trimLongName } from "../../services/trimString";
import { modifyPriceCents } from "../../services/modifyPrice";

import Styles from "./ProductCard.module.scss";

import PricePerUnit from "../shared/PricePerUnit";

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
          {trimLongName(name, 18)}
        </p>
      </Link>
    </div>
  );
}
