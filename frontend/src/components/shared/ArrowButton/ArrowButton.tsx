import React, { ReactElement } from "react";

import Styles from "./ArrowButton.module.scss";

import arrowLeftSvg from "../../../assets/img/arrowLeft.svg";
import { Link } from "react-router-dom";

interface Props {
  linkTo: string;
}

export default function ArrowButton({ linkTo }: Props): ReactElement {
  return (
    <Link to={linkTo} className={Styles.ArrowButton}>
      <img src={arrowLeftSvg} alt="Go back" />
    </Link>
  );
}
