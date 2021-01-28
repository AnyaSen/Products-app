import React from "react";
import "./App.scss";
import AvailableProductsPage from "./pages/AvailableProductsPage";
import { Switch, Route, Redirect } from "react-router";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AvailableProductsPage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
