import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ProductProvider } from "./store/ProductStore";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/Redux";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ProductProvider>
);
