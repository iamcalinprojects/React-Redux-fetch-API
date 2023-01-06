import React from "react";
import { createRoot } from "react-dom/client";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./components/App";
const container = document.querySelector("#root");
const root = createRoot(container);
const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
