import React, { ReactElement, useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions";

import AvailableProductsList from "../../components/AvailableProductsList";
import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";
import { IAppState } from "../../redux/store";

export default function AvailableProductsPage(): ReactElement {
  const isLoading = useSelector((state: IAppState) => state.app.isLoading);
  const isError = useSelector((state: IAppState) => state.app.isError);

  const dispatch: ThunkDispatch<{}, {}, any> = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  return (
    <div>
      <AvailableProductsList />
    </div>
  );
}
