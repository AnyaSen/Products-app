import { IAction } from "./../actions";
import { AppEvents } from "../events";
import { productType } from "../../types";

export interface IState {
  products: Array<productType>;
  isLoading: boolean;
  isError: boolean;
  isPostProductError: boolean;
  isPostProductLoading: boolean;
  enableSubmitButton: boolean;
}

const initState: IState = {
  products: [],
  isLoading: true,
  isError: false,
  isPostProductError: false,
  isPostProductLoading: false,
  enableSubmitButton: false
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

    case AppEvents.POST_PRODUCT_LOADING:
      return {
        ...state,
        isPostProductLoading: true,
        enableSubmitButton: false
      };

    case AppEvents.POST_PRODUCT_SUCCESS:
      return {
        ...state,
        isPostProductLoading: false,
        isPostProductError: false
      };
    case AppEvents.POST_PRODUCT_ERROR:
      return {
        ...state,
        isPostProductLoading: false,
        isPostProductError: true
      };
    case AppEvents.ENABLE_SUBMIT:
      return {
        ...state,
        enableSubmitButton: true
      };

    case AppEvents.DISABLE_SUBMIT:
      return {
        ...state,
        enableSubmitButton: false
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
