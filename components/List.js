import React, { useState } from "react";
import JustifiedGrid from "react-justified-grid";
import { motion } from "framer-motion";

import { Welcome } from "./Welcome";
import { imageHover, titleHover, reallySimple } from "../helpers/Animations";

export function List({ products, itemSelected, setItemSelected }) {
  const handleWorkClick = (event, workId) => {
    event.preventDefault();
    console.log(1)
    setItemSelected(products.find((item) => item.id === workId) || null);
  };

  return (
    <motion.div
      variants={reallySimple}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`content-wrapper flex-vertical ${
        itemSelected ? "illustration-open" : ""
      }`}
    >
      <div className="container">
        <Welcome />
        <JustifiedGrid
          images={products}
          rows={undefined}
          maxRowHeight={400}
          gutter={16}
          className="justified-grid"
        >
          {(processedImages) => (
            <React.Fragment>
              {processedImages.map((image, index) => {
                const { alt, src, width, height, left, top } = image;
                const { path, id, title } = products[index];

                return (
                  <div
                    key={path}
                    className="work-content-container flex vertical align-center"
                  >
                    <motion.div
                      transition={{
                        type: "tween",
                        delay: 0.9,
                        ease: [0.59, 0.12, 0, 0.95],
                      }}
                      className="work-image-container"
                      layoutId={`work-image-container-${path}`}
                      style={{
                        position: "absolute",
                        left: left,
                        top: top,
                      }}
                    >
                      <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="hover-container"
                      >
                        <a
                          href="#"
                          onClick={(event) => handleWorkClick(event, id)}
                          className={`work-open-link`}
                        />
                        <motion.img
                          initial="rest"
                          variants={imageHover}
                          src={src}
                          width={width}
                          height={height}
                          alt={alt}
                        />
                        <motion.h3 initial="rest" variants={titleHover}>
                          {title}
                        </motion.h3>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </React.Fragment>
          )}
        </JustifiedGrid>
      </div>
    </motion.div>
  );
}
