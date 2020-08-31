import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import { WorkNavigation } from "./WorkNavigation";
import "../styles/item.scss";

import { Data } from "../data/Data";
import { disableBodyScroll } from "body-scroll-lock";
import scrollIntoView from 'scroll-into-view';


import {
  reallySimple
} from "../helpers/Animations";



export function Item({ id }) {
  const { alt, src, description, works, title } = Data.find(
    (item) => item.path === id
  );
  const history = useHistory();

  const workItem = (work) => (
    // This are the images of the work
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      src={work.path}
      alt={work.alt}
    />
  );

  const onClose = (event) => {
    const containerScrollPosition = document.getElementById(id).scrollTop;
    const timeFactor = 4;
    const speedFactor = 500;
    const scrollTime = Math.round((containerScrollPosition/timeFactor)/speedFactor * 1000);
    
    event.preventDefault();

    /*
      TODO: check why scroll it is 32
    */
    document.querySelector(".images")
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });

    console.log('time to scroll', scrollTime);

    setTimeout(() => {
      history.push('/')
    }, scrollTime);
  };

  useEffect(() => {
    disableBodyScroll(
      document.querySelector(".this-class-proves-that-this-doesnt-work")
    );
  }, []);

  return (
    <>
      <div id={id} className="card-content-container open flex vertical align-center">
      <WorkNavigation onClose={onClose} />
        <div className="container">
          
          <div className="text-container">
            <motion.h3
            variants={reallySimple}
            initial="initial"
            animate="animate"
            exit="exit"
            >{title}</motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3, delay: 1 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="text"
            >
              {description}
            </motion.p>
          </div>
          {/* <div className="wrapper flex"> */}

          <div className="images">
            <motion.div
              transition={{ 
                type: "tween",
                // delay: 0.9,
                duration: 0.6,
                // ease: [0.43, 0.13, 0.23, 0.96],
                ease: [1, 0.02, 0.55, 0.67],
               }}
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <img src={src} alt={alt} />
            </motion.div>
            {works ? works.map(workItem) : null}
          </div>
        </div>
        {/* <Link to="/">Go back!</Link> */}
      </div>
      {/* </div> */}



      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="overlay"
      >
      </motion.div>




      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        transition={{ duration: 2 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
        <div className="card-content-container flex-vertical open"></div>
      </motion.div> */}
    </>
  );
}
