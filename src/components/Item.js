import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { Photos } from "../data/Photos";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function Item({ id }) {
  const { title, src } = Photos.find(item => item.path === id);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    // this.targetElement = document.querySelector(".card-content-container");
    // disableBodyScroll(document.querySelector(".card-content-container"))
  },[]);
  console.log("working?");
  return (
    
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 2 } }}
        transition={{ duration: 1, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
        <div className="card-content-container flex-vertical open">
        {/* <motion.div
          transition={{ duration: 3 }}
          className="card-content container"> */}
          <motion.div
            transition={{ duration: 3 }}
            className="something"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={src} alt="" />

          </motion.div>
          {/* <motion.div
            transition={{ duration: 3 }}
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2>{title}</h2>
          </motion.div> */}
          {/* <motion.div className="content-container" animate> */}
            <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          {/* </motion.div> */}
        {/* </motion.div> */}
      </div>
      </motion.div>
      
    </>
  );
}
