import * as React from "react"
import { Social } from "./Social";
import { motion } from "framer-motion";

import { reallySimple, defaultAnimation } from "../helpers/Animations";

export const Welcome = () => (

  <motion.section
      variants={defaultAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    
    className="welcome">
    <motion.div
    variants={reallySimple}
    className="text">
      <h1>Hello There!</h1>
      <h2>I’m Mario Parra, a Chilean illustrator based in Berlin. <br /> I create digital illustrations with a focus on stylized characters built through simple and carefully crafted shapes.</h2>
    </motion.div>

    <motion.div
    variants={reallySimple}
    className="welcome-info flex justify-start">
      <Social />
    </motion.div>
  </motion.section>
);
