import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import initStore from "./store";

import App from "./App";

let initialData = window.__PROPS__;
let store = initStore(initialData);

ReactDOM.hydrate(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App initialData={initialData} />
      </BrowserRouter>
    </Provider>
  )
, document.getElementById('root'));


delete window.__PROPS__;
