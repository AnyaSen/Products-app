import { IAction } from "./../actions";
import { AppEvents } from "../events";
import { productType } from "../../types";

export interface IState {
  products: Array<productType>;
  isLoading: boolean;
  isError: boolean;
  currentProduct: object;
}

const initState: IState = {
  products: [],
  isLoading: true,
  isError: false,
  currentProduct: {}
};

const rootReducer = (state: IState = initState, action: IAction) => {
  switch (action.type) {
    case AppEvents.FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case AppEvents.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };

    case AppEvents.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case AppEvents.FETCH_PRODUCT_BY_ID_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case AppEvents.FETCH_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentProduct: action.payload
      };

    case AppEvents.FETCH_PRODUCT_BY_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
