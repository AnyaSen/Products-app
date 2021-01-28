import axios from "axios";
import { Dispatch } from "redux";
import { AppEvents } from "./events";
import { productType } from "../types";

export interface IAction {
  type: AppEvents;
  payload?: any;
}
const {
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} = AppEvents;

export const fetchProductsLoading = () => {
  return {
    type: FETCH_PRODUCTS_LOADING
  };
};

export const fetchProductsSuccess = (payload: Array<productType>) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload
  };
};

export const fetchProductsError = () => {
  return {
    type: FETCH_PRODUCTS_ERROR
  };
};

export const fetchProducts = () => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(fetchProductsLoading());

    axios
      .get("/products")
      .then(response => {
        const products = response.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch(e => {
        console.log("error:", e);
        dispatch(fetchProductsError());
      });
  };
};