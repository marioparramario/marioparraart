import * as React from "react";
import { Social } from "./Social";
import "../styles/footer.scss";

export const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-info flex vertical justify-start">
      <a href="mailto:hello@marioparra.art">hello@marioparra.art</a>
      <span>© Mario Parra</span>
      </div>
    <Social />
    </div>
  </footer>
);
