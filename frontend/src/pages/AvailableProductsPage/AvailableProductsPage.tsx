import React, { ReactElement } from "react";

import AvailableProductsList from "../../components/AvailableProductsList";
import Layout from "../../components/shared/Layout";

export default function AvailableProductsPage(): ReactElement {
  return (
    <Layout gray>
      <AvailableProductsList />
    </Layout>
  );
}
