import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

import initStore from "./store";

let initialData = window.__PROPS__;
let store = initStore(initialData);
store.dispatch({ type: "BE_CLIENT" })

ReactDOM.hydrate(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App initialData={initialData} />
      </BrowserRouter>
    </Provider>
  )
, document.getElementById("root"));


delete window.__PROPS__;
