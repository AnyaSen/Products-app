import React, { ReactElement } from "react";

import Styles from "./ErrorPage.module.scss";
import errorSignSvg from "../../assets/img/errorSign.svg";

export default function ErrorPage(): ReactElement {
  return (
    <div className={Styles.ErrorPage}>
      <img src={errorSignSvg} alt="error" />
      <h3>Sorry, an error has occured.</h3>
    </div>
  );
}
