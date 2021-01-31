import React, { ReactElement } from "react";

import Styles from "./PricePerUnit.module.scss";

interface Props {
  priceEuros: number;
  priceCents: number | string;
}

export default function PricePerUnit({
  priceEuros,
  priceCents
}: Props): ReactElement {
  return (
    <p className={Styles.PricePerUnit}>
      <span className={Styles.PriceEuros}>{priceEuros}</span>
      <span className={Styles.PriceCentsAndUnit}>
        <span>{priceCents}</span>
        <span>/kpl</span>
      </span>
    </p>
  );
}
