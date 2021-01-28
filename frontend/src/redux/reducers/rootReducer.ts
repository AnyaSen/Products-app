import { IAction } from "./../actions";
import { AppEvents } from "../events";
import { productType } from "../../types";

export interface IState {
  products: Array<productType>;
  isLoading: boolean;
  isError: boolean;
}

const initState: IState = {
  products: [],
  isLoading: true,
  isError: false
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

    default:
      return { ...state };
  }
};

export default rootReducer;
