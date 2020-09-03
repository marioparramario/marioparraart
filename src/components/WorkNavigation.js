import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import { workDetailNavigation } from "../helpers/Animations";
import { Data } from "../data/Data";

export function WorkNavigation({ workId, onClose }) {
  const [prev, next] = Data.reduce((list, work, index, data) => {
    if (work.path === workId) {
      const prevIndex = index === 0 ? data.length - 1 : index - 1;
      const nextIndex = index === data.length - 1 ? 0 : index + 1; 
      return [
        data[prevIndex],
        data[nextIndex]
      ]
    }
    return [ ...list ];
  }, []);

  return (
    <motion.nav
      variants={workDetailNavigation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="navigation flex justify-between align-start"
    >
      <div className="flex">
        <a className="mono" href={`/${prev.path}`}>Prev</a>
        <a className="mono" href={`/${next.path}`}>Next</a>
      </div>
      {/* <Link className="mono" to="/">Close project</Link> */}
      <a className="mono" onClick={onClose}>
        Close project
      </a>
    </motion.nav>
  );
}
