import React, { ReactElement } from "react";

import Styles from "./CreateProductFormPage.module.scss";

import ProductForm from "../../components/ProductForm";

export default function CreateProductFormPage(): ReactElement {
  return (
    <div className={Styles.CreateProductFormPage}>
      <ProductForm />
    </div>
  );
}
