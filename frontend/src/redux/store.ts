import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers/rootReducer";
import formReducer from "./reducers/formReducer";

const reducers = combineReducers({
  app: rootReducer,
  form: formReducer
});

export type IAppState = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
