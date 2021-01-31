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
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCT_BY_ID_LOADING,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_ERROR,
  SET_NAME,
  SET_PRICE_EUROS,
  SET_PRICE_CENTS,
  SET_PRICE_PER_KG,
  SET_GLUTEN_FREE,
  SET_LACTOSE_FREE,
  SET_VEGAN,
  SET_DESCRIPTION,
  SET_FILE,
  CLEAR_FORM_VALUES
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

export const fetchProductByIdLoading = () => {
  return {
    type: FETCH_PRODUCT_BY_ID_LOADING
  };
};
export const fetchProductByIdSuccess = (payload: productType) => {
  return {
    type: FETCH_PRODUCT_BY_ID_SUCCESS,
    payload
  };
};
export const fetchProductByIdError = () => {
  return {
    type: FETCH_PRODUCT_BY_ID_ERROR
  };
};

export const fetchProductById = (id: string) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(fetchProductByIdLoading());

    axios
      .get(`/products/${id}`)
      .then(response => {
        const product = response.data;
        dispatch(fetchProductByIdSuccess(product));
      })
      .catch(e => {
        console.log("error:", e);
        dispatch(fetchProductByIdError());
      });
  };
};

export const setName = (payload: string) => {
  return {
    type: SET_NAME,
    payload
  };
};
export const setPriceEuros = (payload: string | number) => {
  return {
    type: SET_PRICE_EUROS,
    payload
  };
};
export const setPriceCents = (payload: string) => {
  return {
    type: SET_PRICE_CENTS,
    payload
  };
};
export const setPricePerKg = (payload: string | number) => {
  return {
    type: SET_PRICE_PER_KG,
    payload
  };
};
export const setGlutenFree = (payload: boolean) => {
  return {
    type: SET_GLUTEN_FREE,
    payload
  };
};
export const setLactoseFree = (payload: boolean) => {
  return {
    type: SET_LACTOSE_FREE,
    payload
  };
};
export const setVegan = (payload: boolean) => {
  return {
    type: SET_VEGAN,
    payload
  };
};
export const setDescription = (payload: string) => {
  return {
    type: SET_DESCRIPTION,
    payload
  };
};
export const setFile = (payload: File[]) => {
  return {
    type: SET_FILE,
    payload
  };
};
export const clearForm = () => {
  return {
    type: CLEAR_FORM_VALUES
  };
};
