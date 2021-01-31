import React, { ReactElement } from "react";

import Styles from "./ButtonWithImg.module.scss";

interface Props {
  imgSrc: string;
  altText: string;
  buttonType?: "button" | "submit";
  filled?: boolean;
  iconHeight?: string;
  onClick?: () => void;
}

export default function ButtonWithImg({
  imgSrc,
  altText,
  buttonType,
  filled,
  iconHeight,
  onClick
}: Props): ReactElement {
  return (
    <button
      className={filled ? Styles.ButtonWithImgFilled : Styles.ButtonWithImg}
      type={buttonType}
      onClick={onClick}
    >
      <img
        style={{ height: iconHeight && iconHeight }}
        src={imgSrc}
        alt={altText}
      />
    </button>
  );
}
