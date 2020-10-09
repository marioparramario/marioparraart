import * as React from "react";
import { motion } from "framer-motion";
import { secondarySimple } from "../helpers/Animations";

export const AboutClosing = () => (
  <motion.div
  variants={secondarySimple}
  initial="initial"
  animate="animate"
  exit="exit"
  className="about-closing">
    <div className="column hire">
      <h3>You can hire me for:</h3>
      <ul className="wrapper">
        <li>Illustration</li>
        <li>Graphic design</li>
        <li>Art direction</li>
        <li>Character design</li>
        <li>Motion design</li>
        <li>Animation</li>
      </ul>
    </div>

    <div className="column contact">
      <h3>Let’s get it touch.</h3>
      <ul className="wrapper">
        <li className="item flex vertical justify-start">
          <span>Email</span>
          <a href="mailto:hello@marioparra.art">hello@marioparra.art</a>
        </li>
        <li className="item flex vertical justify-start">
          <span>Phone</span>
          <a href="tel:+491789154238">+49 178 9154238</a>
        </li>
      </ul>
    </div>
  </motion.div>
);
