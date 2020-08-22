import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useHistory} from "react-router-dom";
import { Events, Element, scroller } from 'react-scroll'
import { WorkNavigation } from "./WorkNavigation";
import "../styles/item.scss";

import { Data } from "../data/Data";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function Item({ id }) {
  const { alt, src, description, works, title } = Data.find(item => item.path === id);
  const history = useHistory();


  const workItem = (work) => (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
      src={work.path} alt={work.alt} />
  );

  const onClose = (event) => {
    //  event.preventDefault();
    scroller.scrollTo('scroll-container', {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  };

  useEffect(() => {
    disableBodyScroll(document.querySelector(".this-class-proves-that-this-doesnt-work"))
    
    Events.scrollEvent.register('end', function(to, element) {
      //after onClose
      console.log('end', arguments);
      //history.push('/');
    });

    return () => Events.scrollEvent.remove('end');
  }, []);

  return (
    <>
      <div
        className="card-content-container open flex vertical align-center"
      >
        <Element name="scroll-container">
          <div className="container">
            <WorkNavigation onClose={onClose} />
            <div className="text-container flex vertical">
              <h3>
                {title}
              </h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
                className="text">{description}
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
        </Element>
        
        {/* <Link to="/">Go back!</Link> */}


      </div>
      {/* </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        transition={{ duration: 2 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
        <div className="card-content-container flex-vertical open">
        </div>
      </motion.div>

    </>
  );
}
