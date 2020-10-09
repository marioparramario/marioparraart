import * as React from "react"
import { Social } from "./Social";
import { motion } from "framer-motion";

import { reallySimple } from "../helpers/Animations";

export const Welcome = () => (

  <motion.section
    variants={reallySimple}
    initial="initial"
    animate="animate"
    exit="exit"
    className="welcome">
    <div className="text">
      <h1>Hello There!</h1>
      <h2>I’m Mario Parra, a Chilean illustrator based in Berlin. <br /> I create digital illustrations with a focus on stylized characters built through simple and carefully crafted shapes.</h2>
    </div>

    <div className="welcome-info flex justify-start">
      <Social />
    </div>
  </motion.section>
);
