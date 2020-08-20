import * as React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import { workDetailNavigation } from "../helpers/Animations";
import { useHistory } from 'react-router-dom';

export function WorkNavigation () {
  const history = useHistory();
  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo(0,0);
    history.push('/');
  }
  return(
  <motion.nav
    variants={workDetailNavigation}
    initial="initial"
    animate="animate"
    exit="exit"
    className="navigation flex justify-between align-start"
  >
    <div className="flex">
      <a className="mono">Prev</a>
      <a className="mono">Next</a>
    </div>
    {/* <Link className="mono" to="/">Close project</Link> */}
    <a className="mono" onClick={handleClick}>Close project</a>
  </motion.nav>
)};
