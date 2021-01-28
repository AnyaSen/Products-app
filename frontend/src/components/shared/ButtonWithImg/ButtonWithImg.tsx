import React, { ReactElement } from "react";

import Styles from "./ButtonWithImg.module.scss";

interface Props {
  imgSrc: string;
  altText: string;
}

export default function ButtonWithImg({
  imgSrc,
  altText
}: Props): ReactElement {
  return (
    <button className={Styles.ButtonWithImg}>
      <img src={imgSrc} alt={altText} />
    </button>
  );
}
