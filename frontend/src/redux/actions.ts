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
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_LOCALLY,
  SET_NAME,
  SET_PRICE_EUROS,
  SET_PRICE_CENTS,
  SET_PRICE_PER_KG,
  SET_GLUTEN_FREE,
  SET_LACTOSE_FREE,
  SET_VEGAN,
  SET_DESCRIPTION,
  SET_FILE,
  CLEAR_FORM_VALUES,
  POST_PRODUCT_LOADING,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
  ENABLE_SUBMIT,
  DISABLE_SUBMIT
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

export const deleteProductLoading = () => {
  return {
    type: DELETE_PRODUCT_LOADING
  };
};

export const deleteProductSuccess = () => {
  return {
    type: DELETE_PRODUCT_SUCCESS
  };
};

export const deleteProductError = () => {
  return {
    type: DELETE_PRODUCT_ERROR
  };
};

export const deleteProductLocally = (payload: string) => {
  return {
    type: DELETE_PRODUCT_LOCALLY,
    payload
  };
};

export const deleteProduct = (id: string) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(deleteProductLoading());

    axios
      .delete(`/products/${id}`)
      .then(response => {
        dispatch(deleteProductSuccess());
        dispatch(deleteProductLocally(id));
        return response;
      })
      .catch(e => {
        console.log("error:", e);
        dispatch(deleteProductError());
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

export const postProductLoading = () => {
  return {
    type: POST_PRODUCT_LOADING
  };
};

export const postProductSuccess = () => {
  return {
    type: POST_PRODUCT_SUCCESS
  };
};

export const postProductError = () => {
  return {
    type: POST_PRODUCT_ERROR
  };
};

export const enableSubmit = () => {
  return {
    type: ENABLE_SUBMIT
  };
};
export const disableSubmit = () => {
  return {
    type: DISABLE_SUBMIT
  };
};

export const postProduct = (product: productType, productPicture: FormData) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(postProductLoading());

    const config = {
      headers: { "content-type": "multipart/form-data" }
    };

    axios
      .post("/product", product)
      .then(response => {
        return axios.post(
          `/products/${response.data._id}/upload`,
          productPicture,
          config
        );
      })
      .then(response => {
        dispatch(postProductSuccess());
        return response;
      })
      .catch(e => {
        console.log("error:", e);
        dispatch(postProductError());
      });
  };
};
