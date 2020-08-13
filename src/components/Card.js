import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Card = ({ id, title, theme }) => {
  return (
    <div
      // layoutId={`card-container-${id}`}
      className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content">
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={`${id}`} className={`card-open-link`} />
    </div>
  );
}