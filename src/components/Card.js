import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Card = ({ path, src, width, height, alt, title, theme }) => {
  return (
    <Link to={`${path}`} className={`card-open-link`}>
      <img className="card-image" src={src} width={width} height={height} alt={alt} />
    </Link>
    <div
      // layoutId={`card-container-${path}`}
      className={`card ${theme}`}>
        <img className="card-image" src={src} width={width} height={height} alt={alt} />
      <div className="card-content-container">
        <motion.div className="card-content">
          <motion.div
         className="card-image-container"
            layoutId={`card-image-container-${path}`}
          >
            <img className="card-image" src={src} width={width} height={height} alt={alt} />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${path}`}
          >
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={`${path}`} className={`card-open-link`} />
    </div>
  );
}