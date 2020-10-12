import * as React from "react";
import { motion } from "framer-motion";
import { reallySimple, defaultAnimation } from "../helpers/Animations";

export const AboutIntro = () => (
  <motion.div
    variants={defaultAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    className="about-intro">
      <motion.img 
      variants={reallySimple}
      src="https://res.cloudinary.com/oqdesign/image/upload/v1602528866/Ultimate%20Portfolio/General/about-21_cetay0.svg"/>

    {/* <motion.div
      variants={reallySimple}
      className="image">
      <img src="https://res.cloudinary.com/oqdesign/image/upload/v1602528866/Ultimate%20Portfolio/General/about-21_cetay0.svg"/>
    </motion.div> */}
    <motion.div
      variants={reallySimple}
      className="about-intro-text">
      <h1>Hello There!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </motion.div>
  </motion.div>
);

