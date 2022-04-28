import React from "react";
import ReactDOM from "react-dom";
import "./customBootstrap.scss";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import AuthProvider from "./providers/AuthProvider";
import { initMiddleware } from "devise-axios";

initMiddleware();

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Normalize />

      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
