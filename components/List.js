import React, { useState } from "react";
import Link from "next/link";
import JustifiedGrid from "react-justified-grid";
import { motion } from "framer-motion";

import { Welcome } from "./Welcome";
import { imageHover, titleHover, secondarySimple } from "../helpers/Animations";

export function List({ products, itemSelected }) {

  return (
    <div
      className={`content-wrapper flex-vertical ${itemSelected ? "illustration-open" : ""
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
                  <motion.div
                    variants={secondarySimple}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={path}
                    className="work-content-container flex vertical align-center"
                  >
                    <div
                      key={path}
                      className="work-image-container"
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
                        <Link
                          href="/work/[path]"
                          as={`/work/${path}`}
                          scroll={false}
                        >
                          <motion.img
                            initial="rest"
                            variants={imageHover}
                            src={src}
                            width={width}
                            height={height}
                            alt={alt}
                          />
                        </Link>

                        <motion.h3 initial="rest" variants={titleHover}>
                          {title}
                        </motion.h3>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </React.Fragment>
          )}
        </JustifiedGrid>
      </div>
    </div>
  );
}
