import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router";

import ProductPage from "./pages/ProductPage";
// import CreateProductFormPage from "./pages/CreateProductFormPage";
import AvailableProductsPage from "./pages/AvailableProductsPage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "./redux/store";
import { ThunkDispatch } from "redux-thunk";
import { fetchProducts } from "./redux/actions";
import LoadingPage from "./pages/LoadingPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
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
      <Switch>
        <Route exact path="/" component={AvailableProductsPage} />
        <Route exact path="/product/:id" component={ProductPage} />
        {/* <Route exact path="/create" component={CreateProductFormPage} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
