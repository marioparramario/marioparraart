import React from "react";

import { AboutIntro } from "../components/AboutIntro"
import { AboutClosing } from "../components/AboutClosing"
import { motion } from "framer-motion";
import {
  reallySimple
} from "../helpers/Animations";


const About = props => (
    <motion.section
      // variants={reallySimple}
      initial="initial"
      animate="animate"
      exit={{opacity: 0}}
      className="about flex-vertical">

      <div className="container">
        <AboutIntro />
        <AboutClosing />


      </div>
    </motion.section>

);

export default About;

