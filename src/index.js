import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
// import "./styles/style.scss";
import "./styles/normalize.scss";
import "./styles/layout.scss";
import "./styles/index.scss";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
