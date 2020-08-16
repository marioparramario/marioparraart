import React, { Component } from 'react';
import JustifiedGrid from 'react-justified-grid';
import { Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Card } from "./Card";
import { Photos } from "../data/Photos";
import { items } from "../data/data";
import "../styles/flexbin.scss";

export function List({ selectedId }) {
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
                  <Link
                    key={index}
                    to={`${item.path}`}
                    style={{
                      position: 'absolute',
                      left: left,
                      top: top
                    }}
                    className={`card-open-link`}
                  >
                    <img src={src} width={width} height={height} alt={alt} />
                  </Link>
                );
              })}
            </React.Fragment>
          )}
        </JustifiedGrid>
      </div>
    </main>
  );
}
