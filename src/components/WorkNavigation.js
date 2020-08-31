import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import { workDetailNavigation } from "../helpers/Animations";
import { useHistory } from 'react-router-dom';

export function WorkNavigation ({ onClose }) {

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
    <a className="mono" onClick={onClose}>Close project</a>
  </motion.nav>

)};
