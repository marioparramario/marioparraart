import React, { Component } from 'react';
import JustifiedGrid from 'react-justified-grid';
import { Link } from "react-router-dom";
import { Welcome } from "./Welcome";
//import { Card } from "./Card";
import { motion } from "framer-motion";
import { Photos } from "../data/Photos";
import { items } from "../data/data";
import "../styles/flexbin.scss";

export function List({ selectedId }) {
  const theme = '';
  return (
    <main className={`content-wrapper flex-vertical ${selectedId ? 'illustration-open' : ''}`}>
      <div className="container">
        <Welcome />
        <JustifiedGrid images={Photos} rows={3} maxRowHeight={420} gutter={16} className="justified-grid">
          {processedImages => (
            <React.Fragment>
              {processedImages.map((image, index) => {
                const { alt, src, width, height, left, top } = image;
                const item = Photos[index];
                return (
                  <motion.div
                  className="card-content-container"
                  transition={{ duration: 3 }}
                  layoutId={`card-content-container-${item.path}`}
                  >
                    <motion.div
                      className="card-image-container"
                      layoutId={`card-image-container-${item.path}`}
                      style={{
                        position: 'absolute',
                        left: left,
                        top: top
                      }}
                      >
                      <img src={src} width={width} height={height} alt={alt} />
                      <Link to={`${item.path}`} className={`card-open-link`} />
                    </motion.div>
                    </motion.div>
                );
              })}
            </React.Fragment>
          )}
        </JustifiedGrid>
      </div>
    </main>
  );
}
