import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import allReducers from "./redux/store";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({ reducer: { allReducers } });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
