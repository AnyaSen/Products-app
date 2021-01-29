import React, { ReactElement, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { fetchProductById } from "../../redux/actions";

import Styles from "./ProductPage.module.scss";
import modifySignSvg from "../../assets/img/modifySign.svg";

import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import ProductTag from "../../components/shared/ProductTag";
import ArrowButton from "../../components/shared/ArrowButton";
import ButtonWithImg from "../../components/shared/ButtonWithImg";

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

  const {
    name,
    price,
    description,
    pricePerKg,
    glutenFree,
    lactoseFree,
    vegan
  } = currentProduct;

  return (
    <div className={Styles.ProductPage}>
      <div className={Styles.ProductPageHeader}>
        <ArrowButton linkTo="/" />
        <h1>Product information</h1>
        <ButtonWithImg imgSrc={modifySignSvg} altText="Edit" />
      </div>

      <div className={Styles.ProductInfoAndPhoto}>
        <img src={`/products/${id}/img`} className={Styles.ProductPhoto} />

        <div className={Styles.ProductInfo}>
          <div>
            <h2>{name}</h2>

            {price && (
              <p className={Styles.ProductPrice}>
                {price.priceEuros}.{price.priceCents ? price.priceCents : "00"}/
                {price.unit}
                <span>{pricePerKg}/kg</span>
              </p>
            )}
          </div>

          <div className={Styles.ProductTags}>
            {glutenFree && <ProductTag type="gluten-free" />}
            {lactoseFree && <ProductTag type="lactose-free" />}
            {vegan && <ProductTag type="vegan" />}
          </div>
        </div>
      </div>

      <div className={Styles.ProductDescription}>
        <h2>Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
