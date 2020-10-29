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
      
      src="https://res.cloudinary.com/oqdesign/image/upload/v1602528866/Ultimate%20Portfolio/General/about-21_cetay0.svg"
      // src="https://res.cloudinary.com/oqdesign/image/upload/v1597872364/New%20Portdolio/about-15_afwuy7.jpg"
      />

    {/* <motion.div
      variants={reallySimple}
      className="image">
      <img src="https://res.cloudinary.com/oqdesign/image/upload/v1602528866/Ultimate%20Portfolio/General/about-21_cetay0.svg"/>
    </motion.div> */}
    <motion.div
      variants={reallySimple}
      className="about-intro-text">
      <h1>Hey!</h1>
      <p>So, this is the section where the artist tells you their origin story.<br/>I guess I could tell you that I'm drawing since I can hold a pen, and the difficulties I've had to overcome, but I rather skip this part since at this point it's become some sort of generic template.<br/>For several reasons, I dropped out halfway through industrial design to start my journey as an autodidact graphic designer instead. However, I never really stopped drawing.<br/>At some point, I realized that I could make a living out of what I loved the most, and I have been making illustrations since then.<br/>It took me a while to embrace this path and I don't necessarily regret the detour, because ultimately, being a designer has deeply permeated into my work. At the end of the day, I can't help but thinking in geometrical shapes of color and simplifying as much as possible.<br/>I love learning new things and keep pushing the boundaries of my creativity.<br/>(Also cyclist, musician, and a jazz freak).</p>
    </motion.div>
  </motion.div>
);

