import * as React from "react";
// import { Avatar } from "react-lorem-ipsum";
import Logo from "./logo";
import "../styles/navbar.scss";

export const Header = () => (
  <nav className="navbar flex justify-stretch">
  <div className="wrapper flex align-center justify-between" exit="exit">
    <a href="/"
      className="logo">
      Logo Mario Parra
      <Logo />
      
    </a>

    <div className="link flex justify-end">
      <a href="/" >
        Work
      </a>
      <a href="/about">
      Contact
      </a>

    </div>
  </div>
</nav>
);
