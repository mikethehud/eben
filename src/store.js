import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default function initStore (initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, logger)
  );
}
