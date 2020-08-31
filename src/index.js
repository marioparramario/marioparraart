import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./styles/normalize.scss";
import "./styles/layout.scss";
import "./styles/styles.scss";
import "./styles/index.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
