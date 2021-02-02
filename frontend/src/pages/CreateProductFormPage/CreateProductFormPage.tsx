import React, { ReactElement } from "react";

import ProductForm from "../../components/ProductForm";
import Layout from "../../components/shared/Layout";

export default function CreateProductFormPage(): ReactElement {
  return (
    <Layout>
      <ProductForm />
    </Layout>
  );
}
