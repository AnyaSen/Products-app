import React, { ReactElement } from "react";

import Styles from "./LoadingPage.module.scss";

import Loader from "../../components/shared/Loader";

export default function LoadingPage(): ReactElement {
  return (
    <div className={Styles.LoadingPage}>
      <Loader />
      <h3>Loading</h3>
    </div>
  );
}
