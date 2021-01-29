import React, { ReactElement, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { fetchProductById } from "../../redux/actions";

import Styles from "./ProductPage.module.scss";

import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import PricePerUnit from "../../components/shared/PricePerUnit";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}
export default function ProductPage({ match }: Props): ReactElement {
  const { id } = match.params;
  const isLoading = useSelector((state: IAppState) => state.app.isLoading);
  const isError = useSelector((state: IAppState) => state.app.isError);
  const currentProduct = useSelector(
    (state: IAppState) => state.app.currentProduct
  );

  const dispatch: ThunkDispatch<{}, {}, any> = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;
  const { name, price, description, pricePerKg } = currentProduct;
  const { priceEuros, priceCents, unit } = price;

  return (
    <div className={Styles.ProductPage}>
      <h1>Product information</h1>
      <div className={Styles.ProductInfoAndPhoto}>
        <img src={`/products/${id}/img`} />

        <div className={Styles.ProductInfo}>
          <h2>{name}</h2>
          <p className={Styles.ProductPrice}>
            {priceEuros}.{priceCents}/{unit}
            <span>{pricePerKg}/kg</span>
          </p>
        </div>
      </div>

      <div className={Styles.ProductDescription}>
        <h2>Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
