import { IAction } from "./../actions";
import { AppEvents } from "../events";
import { productType } from "../../types";

export interface IState {
  products: Array<productType>;
  isLoading: boolean;
  isError: boolean;
  isPostProductError: boolean;
  isDeleteProductError: boolean;
  isDeleteLoading: boolean;
  isDeleteDone: boolean;
  enableSubmitButton: boolean;
}

const initState: IState = {
  products: [],
  isLoading: true,
  isError: false,
  isPostProductError: false,
  isDeleteProductError: false,
  isDeleteLoading: false,
  isDeleteDone: false,
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

    case AppEvents.DELETE_PRODUCT_LOADING:
      return {
        ...state,
        isDeleteLoading: true,
        isDeleteProductError: false
      };

    case AppEvents.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isDeleteLoading: false,
        isDeleteProductError: false,
        isDeleteDone: true
      };

    case AppEvents.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        isDeleteLoading: false,
        isDeleteProductError: true
      };

    case AppEvents.DELETE_PRODUCT_LOCALLY:
      const updatedArr = state.products;

      const productToDeleteIndex = updatedArr.findIndex(
        (product: productType) => product._id === action.payload
      );

      updatedArr.splice(productToDeleteIndex, 1);
      return {
        ...state,

        products: updatedArr
      };

    case AppEvents.POST_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
        enableSubmitButton: false
      };

    case AppEvents.POST_PRODUCT_SUCCESS:
      const arrayWithNewProduct = state.products;
      arrayWithNewProduct.push(action.payload);

      return {
        ...state,
        products: arrayWithNewProduct,
        isPostProductError: false,
        isLoading: false
      };

    case AppEvents.POST_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
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
