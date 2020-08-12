import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/flexbin.scss";
// import ProgressiveImage from "react-progressive-image";
function Card({ id, title, theme }) {
  return (
    <div
      // layoutId={`card-container-${id}`}
      className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
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
      <Link to={id} className={`card-open-link`} />
    </div>
  );
}

export function List({ selectedId }) {
  return (
    <main className="content-wrapper flex-vertical">
      <div className="container">
        {/* <ProgressiveImage
        src={require("./images/yasmeen.webp")}
        placeholder={require("./images/compressed-image.jpg")}>
        {(src) => (
          <img
            src={src}
            alt='Yasmeen Tariq'

          />
        )}
      </ProgressiveImage> */}



        <div className="card-list flexbin flexbin-margin">
          {items.map(card => (
            <Card key={card.id} {...card} isSelected={card.id === selectedId} />
          ))}
        </div>
      </div>
    </main>
  );
}
