import React, { ReactElement } from "react";

import Styles from "./CreateProductFormPage.module.scss";

import CreateProductForm from "../../components/CreateProductForm";

export default function CreateProductFormPage(): ReactElement {
  return (
    <div className={Styles.CreateProductFormPage}>
      <CreateProductForm />
    </div>
  );
}
