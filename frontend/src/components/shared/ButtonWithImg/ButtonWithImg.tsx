import React, { ReactElement } from "react";

import Styles from "./ButtonWithImg.module.scss";

interface Props {
  imgSrc: string;
  altText: string;
  buttonType?: "button" | "submit";
  filled?: boolean;
  iconHeight?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function ButtonWithImg({
  imgSrc,
  altText,
  buttonType,
  filled,
  iconHeight,
  onClick,
  disabled
}: Props): ReactElement {
  return (
    <button
      className={filled ? Styles.ButtonWithImgFilled : Styles.ButtonWithImg}
      style={{
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer"
      }}
      type={buttonType}
      onClick={onClick}
      disabled={disabled || false}
    >
      <img
        style={{ height: iconHeight && iconHeight }}
        src={imgSrc}
        alt={altText}
      />
    </button>
  );
}
