import React, { useState } from 'react';
import JustifiedGrid from 'react-justified-grid';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Welcome } from "./Welcome";
import { GridImage } from './GridImage';

import { Data } from "../data/Data";
import { titleHover } from "../helpers/Animations";
import {
  reallySimple
} from "../helpers/Animations";


export function List({ selectedId }) {
  const theme = '';
  const [imagesLoad, setImagesLoad] = useState(0);
  const onLoadImage = (event) => {
    setImagesLoad(imagesLoad + 1);
  };

  return (
    <motion.main 
          // variants={reallySimple}
          // initial="initial"
          // animate="animate"
          // exit="exit"
          exit={{opacity: 0}}
          
          className={`content-wrapper flex-vertical ${selectedId ? 'illustration-open' : ''}`}>
      <div className="container">
        <Welcome />
        {imagesLoad !==  Data.length && (
          <AnimatePresence>
            <motion.div
              className="grid-loader"
              exit={{opacity: 0}}
              animate="animate"
            >
              CARGANDO ...
            </motion.div>
          </AnimatePresence>
        )}
        <JustifiedGrid images={Data} rows={undefined} maxRowHeight={400} gutter={16} className="justified-grid">
          {processedImages => (
            <React.Fragment>
              {processedImages.map((image, index) => {
                const { alt, src, width, height, left, top } = image;
                const item = Data[index];
                return (
                  <div
                    className="card-content-container flex vertical align-center"
                  >
                    <motion.div
                    transition={{ 
                      type: "tween",
                      delay: 0.9,
                      ease: [0.59, 0.12, 0, 0.95],
                     }}
                      className="card-image-container"
                      layoutId={`card-image-container-${item.path}`}
                      style={{
                        position: 'absolute',
                        left: left,
                        top: top
                      }}
                    >
                      <motion.div
                        initial="rest" whileHover="hover" animate="rest"
                        className="hover-container">
                        
                        <GridImage
                          src={src}
                          width={width}
                          height={height}
                          alt={alt}
                          onLoad={onLoadImage}
                        />
                        
                        <Link to={`${item.path}`} className={`card-open-link`} />
                        <motion.h3
                          initial="rest"
                          variants={titleHover}
                        >
                          {item.title}
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
    </motion.main>
  );
}
