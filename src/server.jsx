import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import { Provider } from "react-redux";

import routes from "./routes";
import initStore from "./store";

import Template from "./template";
import App from "./App";
import Home from "./containers/Home";

const serverRenderer = ({ clientStats, serverStats }) => {
  return (req, res, next) => {

    // Initiate empty store
    var store = initStore({ });

    const currentRoutes = routes.filter(route => matchPath(req.url, route));

    const promises = currentRoutes.map((route) => {
      let fetchData = route.component.fetchData;
      return fetchData instanceof Function ? fetchData(store, matchPath(req.url, route)) : Promise.resolve(null)
    });

    // Fetch data
    Promise.all(promises)
      // Data fetched, send static route
      .then(response => {

        const context = {};

        const markup = renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>
        )

        const stylesheet = renderToString(
          <link rel="stylesheet" href="/static/styles.css" />
        );

        const helmet = Helmet.renderStatic();

        res.status(200).send(Template({
          markup: markup,
          helmet: helmet,
          initialData: serialize(store.getState()),
          stylesheet: (process.env.NODE_ENV == 'development') ? '' : stylesheet
        }))
      })
      .catch(err => {
        console.log('error', err);
      })
  }
}

export default serverRenderer;
