import React, { ReactElement } from "react";

import Styles from "./Loader.module.scss";
import loadingDotSvg from "../../../assets/img/loadingDot.svg";

interface Props {
  small?: boolean;
}

export default function Loader({ small }: Props): ReactElement {
  return (
    <div className={small ? Styles.LoaderSmall : Styles.Loader}>
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
