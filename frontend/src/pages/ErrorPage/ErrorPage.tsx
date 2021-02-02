import React, { ReactElement } from "react";

import Styles from "./ErrorPage.module.scss";
import errorSignSvg from "../../assets/img/errorSign.svg";

interface Props {
  text?: string;
}

export default function ErrorPage({ text }: Props): ReactElement {
  return (
    <div className={Styles.ErrorPage}>
      <img src={errorSignSvg} alt="error" />
      <h3>{text ? text : "Sorry, an error has occured."}</h3>
    </div>
  );
}
