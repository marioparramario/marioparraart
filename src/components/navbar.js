import { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router';
import Logo from "./logo";
import { AppContext } from "@helpers/appContext";
import { motion } from "framer-motion";
import { menuAnimationLeft, menuAnimationRight } from "@helpers/animations";

import "@styles/navbar.scss";

function Navbar() {
  const router = useRouter();
  const {
    isMenuOpen,
    openMenu,
    closeMenu,
  } = useContext(AppContext);
  const [menuState, setMenuState] = useState({});
  const navbarOpenClass = isMenuOpen ? "open" : "";
  const onClickMenuButton = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };
  const onClickMenuItem = (event) => {
    const targetPath = event.target.getAttribute("href") || "/";
    event.preventDefault();
    router.push(targetPath);



    closeMenu();
  };

  useEffect(() => {
    setMenuState({
      digital: window.location.pathname.startsWith('/digital') ? 'active' : '',
      illustration: window.location.pathname.startsWith('/illustration') ? 'active' : '',
      graphic: window.location.pathname.startsWith('/graphic') ? 'active' : '',
      about: window.location.pathname.startsWith('/about') ? 'active' : '',
    })
  }, []);

  return (
    <>
      <div className={`overlay ${navbarOpenClass}`}></div>
      <nav className="navbar flex justify-stretch">
        <div className="wrapper flex align-center justify-between" exit="exit">
          <a href="/"
            className="logo"
            onClick={onClickMenuItem}>
            Logo Mario Parra
            <Logo />
            
          </a>

          <div className={`link flex justify-end ${navbarOpenClass}`}>
            <a href="/" onClick={onClickMenuItem}>
              Work
            </a>
            <a href="/about" onClick={onClickMenuItem} className={menuState.about}>
            Contact
            </a>
            <a href="/experiment" onClick={onClickMenuItem} className={menuState.about}>
            experiment
            </a>

          </div>

          <div className="menu" onClick={onClickMenuButton}>
            <motion.div
              initial={false}
              animate={isMenuOpen ? "open" : "closed"}
              variants={menuAnimationLeft}
              className="line"></motion.div>
            <motion.div
              initial={false}
              animate={isMenuOpen ? "open" : "closed"}
              variants={menuAnimationRight}
              className="line"></motion.div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
