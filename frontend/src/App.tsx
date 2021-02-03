import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router";

import ProductPage from "./pages/ProductPage";
import CreateProductFormPage from "./pages/CreateProductFormPage";
import AvailableProductsPage from "./pages/AvailableProductsPage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "./redux/store";
import { ThunkDispatch } from "redux-thunk";
import { fetchProducts } from "./redux/actions";
import LoadingPage from "./pages/LoadingPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const {
    isError,
    isLoading,
    isDeleteLoading,
    isPostProductError,
    isDeleteProductError
  } = useSelector((state: IAppState) => state.app);

  const dispatch: ThunkDispatch<{}, {}, any> = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading || isDeleteLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;
  if (isPostProductError)
    return (
      <ErrorPage text="Sorry, something went wrong during the submission" />
    );
  if (isDeleteProductError)
    return (
      <ErrorPage text="Sorry, something went wrong while deleting the product" />
    );

  return (
    <div>
      <Switch>
        <Route exact path="/" component={AvailableProductsPage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/create" component={CreateProductFormPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
