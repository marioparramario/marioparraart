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
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484575/illustration/chile-calling/chile-calling-00_ntlrat.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484576/illustration/delivery-hero/delivery-hero-00_op78ya.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484598/illustration/mapuches/mapuches-00_dc4ejg.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484593/illustration/forastero/forastero-00_qa40r5.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484591/illustration/foodora/foodora-00_iqlo0h.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484588/illustration/economy-2/economy-2-02_jag0kh.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484594/illustration/gallereplay/gallereplay-00_kfncvd.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484599/illustration/risk-1/risk-1-00_hnbhpv.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484595/illustration/innovation/innovation-02_w9qqzs.jpg" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/oqdesign/image/upload/v1596484596/illustration/innovation/innovation-00_jfoq2d.jpg" />
            </a>
          </div>
        </div>

        <ul className="card-list">
          {items.map(card => (
            <Card key={card.id} {...card} isSelected={card.id === selectedId} />
          ))}
        </ul>
      </div>
  );
}
