import { AppEvents } from "../events";
import { IAction } from "../actions";

export interface IState {
  name: string;
  priceEuros: string;
  priceCents: string;
  pricePerKg: string;
  glutenFree: boolean;
  lactoseFree: boolean;
  vegan: boolean;
  description: string;
  file: File[];
}

const initState: IState = {
  name: "",
  priceEuros: "",
  priceCents: "",
  pricePerKg: "",
  glutenFree: false,
  lactoseFree: false,
  vegan: false,
  description: "",
  file: []
};

const formValuesReducer = (state: IState = initState, action: IAction) => {
  switch (action.type) {
    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };

    case AppEvents.SET_PRICE_EUROS:
      return { ...state, priceEuros: action.payload };

    case AppEvents.SET_PRICE_CENTS:
      return { ...state, priceCents: action.payload };

    case AppEvents.SET_PRICE_PER_KG:
      return { ...state, pricePerKg: action.payload };

    case AppEvents.SET_GLUTEN_FREE:
      return { ...state, glutenFree: action.payload };

    case AppEvents.SET_LACTOSE_FREE:
      return { ...state, lactoseFree: action.payload };

    case AppEvents.SET_VEGAN:
      return { ...state, vegan: action.payload };

    case AppEvents.SET_DESCRIPTION:
      return { ...state, description: action.payload };

    case AppEvents.SET_FILE:
      return { ...state, file: action.payload };

    case AppEvents.CLEAR_FORM_VALUES:
      return {
        ...state,
        name: "",
        priceEuros: "",
        priceCents: "",
        pricePerKg: "",
        glutenFree: false,
        lactoseFree: false,
        vegan: false,
        description: "",
        file: []
      };

    default:
      return { ...state };
  }
};

export default formValuesReducer;
