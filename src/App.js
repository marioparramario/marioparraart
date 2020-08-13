import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { Item } from "./Item";
import { List } from "./List";
import { About } from "./pages/about";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;
  console.log(id);
  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path="/me/about" component={About} />
          <Route path={["/illustration/:id", "/"]} component={Store} />
          
        </Router>
      </AnimateSharedLayout>
  );
}
