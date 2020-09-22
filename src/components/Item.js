import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import { WorkNavigation } from "./WorkNavigation";
import "../styles/item.scss";

import { Data } from "../data/Data";
import { disableBodyScroll } from "body-scroll-lock";
import scrollIntoView from "scroll-into-view";

import {
  imagesWork,
  textContainerWorks,
  textComponentsWorks,
  overlayWorks,
} from "../helpers/Animations";

export function Item({ id }) {
  const { alt, src, description, works, title } = Data.find(
    (item) => item.path === id
  );
  const history = useHistory();

  const workItem = (work) => (
    // This are the images of the work
    <motion.img
      variants={imagesWork}
      initial="initial"
      animate="animate"
      exit="exit"
      src={work.path}
      alt={work.alt}
    />
  );

  const onClose = (event) => {
    const containerScrollPosition = document.getElementById(id).scrollTop;
    const timeFactor = 4;
    const speedFactor = 500;
    const scrollTime = Math.round(
      (containerScrollPosition / timeFactor / speedFactor) * 1000
    );

    event.preventDefault();

    /*
      TODO: check why scroll it is 32
    */
    document.querySelector(".images").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    console.log("time to scroll", scrollTime);

    setTimeout(() => {
      history.push("/");
    }, scrollTime);
  };

  useEffect(() => {
    disableBodyScroll(
      document.querySelector(".this-class-proves-that-this-doesnt-work")
    );
  }, []);

  return (
    <>
      <div
        id={id}
        className="card-content-container open flex vertical align-center"
      >
        
        <div className="container">
          <motion.div
            variants={textContainerWorks}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-container"
          >
            <WorkNavigation workId={id} onClose={onClose} />
            <motion.h3 variants={textComponentsWorks}>{title}</motion.h3>
            <motion.p variants={textComponentsWorks} className="text">
              {description}
            </motion.p>
          </motion.div>
          {/* <div className="wrapper flex"> */}

          <div className="images">
            <motion.div
              transition={{
                type: "tween",
                // delay: 0.9,
                duration: 1,
                // ease: [0.43, 0.13, 0.23, 0.96],
                ease: [0.59, 0.12, 0, 0.95],
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
        variants={overlayWorks}
        initial="initial"
        animate="animate"
        exit="exit"
        className="overlay"
      ></motion.div>

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
