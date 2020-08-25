import * as React from "react";
import Logo from "./Logo";
import "../styles/navbar.scss";

export const Navbar = () => (
  <nav className="navbar flex">
  <div className="wrapper">
    <a href="/"
      className="logo">
      Logo Mario Parra
      <Logo />
    </a>

    <div className="link flex justify-end">
      <a href="/" >
        work
      </a>
      <a href="/about">
      contact
      </a>
    </div>
  </div>
</nav>
);
