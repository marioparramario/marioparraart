import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import { WorkNavigation } from "./WorkNavigation";
import "../styles/item.scss";

import { Data } from "../data/Data";
import { disableBodyScroll } from "body-scroll-lock";
import scrollIntoView from 'scroll-into-view';

export function Item({ id }) {
  const { alt, src, description, works, title } = Data.find(
    (item) => item.path === id
  );
  const history = useHistory();

  const workItem = (work) => (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
      src={work.path}
      alt={work.alt}
    />
  );

  const onClose = (event) => {
    event.preventDefault();

    scrollIntoView(
      document.querySelector(".images"),
      {
        align:{
          top: -10,
          left: 0,
          topOffset: -10,
          leftOffset: 0,
        }
      },
      (type) => {
        //  window.scrollTo(0,0);
        history.push('/');
      } 
    );
  };

  useEffect(() => {
    disableBodyScroll(
      document.querySelector(".this-class-proves-that-this-doesnt-work")
    );
  }, []);

  return (
    <>

      <div className="card-content-container open flex vertical align-center">
        <div className="container">
          <WorkNavigation onClose={onClose} />
          <div className="text-container flex vertical">
            <h3>{title}</h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
              className="text"
            >
              {description}
            </motion.p>
          </div>
          {/* <div className="wrapper flex"> */}

          <div className="images flex-vertical">
            <motion.div
              transition={{ duration: 2 }}
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
        transition={{ duration: 2 }}
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
