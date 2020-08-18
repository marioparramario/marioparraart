import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import { workDetailNavigation } from "../helpers/Animations";

export const WorkNavigation = () => (
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
    <Link className="mono" to="/">Close project</Link>
    {/* <a className="mono">Close project</a> */}
  </motion.nav>
);
