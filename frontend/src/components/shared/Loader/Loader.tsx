import React, { ReactElement } from "react";

import Styles from "./Loader.module.scss";
import loadingDotSvg from "../../../assets/img/loadingDot.svg";

export default function Loader(): ReactElement {
  return (
    <div className={Styles.Loader}>
      <img src={loadingDotSvg} alt="loading" className={Styles.loadingDotOne} />
      <img src={loadingDotSvg} alt="loading" className={Styles.loadingDotTwo} />
      <img
        src={loadingDotSvg}
        alt="loading"
        className={Styles.loadingDotThree}
      />
    </div>
  );
}
