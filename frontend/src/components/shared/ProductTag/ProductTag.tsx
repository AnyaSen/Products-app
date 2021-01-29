import React, { ReactElement } from "react";

import Styles from "./ProductTag.module.scss";

import glutenFreeSvg from "../../../assets/img/glutenFreeSign.svg";
import lactoseFreeSvg from "../../../assets/img/lactoseFreeSign.svg";
import veganSvg from "../../../assets/img/veganSign.svg";

interface Props {
  type: "gluten-free" | "lactose-free" | "vegan";
}

export default function ProductTag({ type }: Props): ReactElement {
  return (
    <div className={Styles.ProductTag}>
      <img
        src={
          type === "gluten-free"
            ? glutenFreeSvg
            : type === "lactose-free"
            ? lactoseFreeSvg
            : veganSvg
        }
        alt={type}
      />

      <p>
        {type === "gluten-free"
          ? "Gluten-free"
          : type === "lactose-free"
          ? "Lactose-free"
          : "Vegan"}
      </p>
    </div>
  );
}
