// import React, {useEffect} from "react";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useDarkMode } from "./components/useDarkMode"
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Toggle from "./components/Toggle"

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Item } from "./components/Item";
import { List } from "./components/List";
import { About } from "./pages/about";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { enableBodyScroll } from "body-scroll-lock";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;
  switch (id) {
    case 'about':
      return <About />
    default:
      enableBodyScroll(document.querySelector(".this-class-proves-that-this-doesnt-work"))
      return (
        <>
          <List selectedId={id} />
          <AnimatePresence>
            {id && imageHasLoaded && <Item id={id} key="item" />}
          </AnimatePresence>
        </>
      );
  }
}

export default function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />


  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />

        {/* <AnimateSharedLayout type="crossfade"> */}
          <Navbar />
          <AnimatePresence exitBeforeEnter>
          <Router>
            <Route path={["/:id", "/"]} component={Store} />
          </Router>
          </AnimatePresence>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Footer />
        {/* </AnimateSharedLayout> */}
      </>
    </ThemeProvider>
  );
}
