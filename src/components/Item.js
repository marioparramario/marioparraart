import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Data } from "../data/Data";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function Item({ id }) {
  const { alt, src, description, works } = Data.find(item => item.path === id);
  useEffect(() => {
    disableBodyScroll(document.querySelector(".card-content-container"))
  }, []);
  console.log("working?");
  const workItem = (work) => (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
      src={work.path} alt={work.alt} />
  );
  return (
    <>
      <div
        className="card-content-container open flex vertical align-center"
      >
        <div className="container">
          <motion.div
            transition={{ duration: 2 }}
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img src={src} alt={alt} />
          </motion.div>
          <Link to="/">Go back!</Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className="text">{description}
          </motion.p>
          <div className="images">
            {works ? works.map(workItem) : null}
          </div>
        </div>
      </div>

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
