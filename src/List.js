import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/flexbin.scss";

function Card({ id, title, category, theme }) {
  return (

    <li className={`card ${theme}`}>

      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            {/* <img className="card-image" src={`images/${id}.jpg`} alt="" /> */}
            <img className="card-image" src="https://res.cloudinary.com/oqdesign/image/upload/v1596484562/illustration/berlin/berlin-00_x2a1nm.jpg" alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <div>
      <div className="flexbin flexbin-margin">
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
        <a>
          <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
        </a>
      </div>




      <ul className="card-list flexbin flexbin-margin">
        {items.map(card => (
          <Card key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
      </ul>
    </div>
  );
}
