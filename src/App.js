import React, {useEffect} from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Item } from "./components/Item";
import { List } from "./components/List";
import { About } from "./pages/about";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;
  
  switch (id) {
    case 'about':
      return <About />
    default:
      
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
  return (
    
      <AnimateSharedLayout type="crossfade">
        <Navbar />
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
      </AnimateSharedLayout>
  );
}
