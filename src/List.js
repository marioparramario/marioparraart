// import React from "react";
import React, { Component } from 'react';
import { items } from "./data";
import "./styles/flexbin.scss";
import { Card } from "./components/Card";
import { photos } from "./components/photos";
// import Gallery from "react-photo-gallery";
// import JustifiedGrid from 'react-justified-grid'

import JustifiedGrid from 'react-justified-grid';
import mockData from './mockData';
import { Welcome } from "./components/welcome";

export function List({ selectedId }) {

  return (
    <main className={`content-wrapper flex-vertical ${selectedId ? 'illustration-open' : ''}`}>
      <div className="container">
      <Welcome />
      {/* <JustifiedGrid
      images={photos}
      rows={3}
      maxRowHeight={320}
      gutter={10}/>
      <hr /> */}
        <JustifiedGrid images={photos} rows={3} maxRowHeight={320} gutter={10} className="justified-grid">
          {processedImages => (
            <React.Fragment>
              {processedImages.map((image, i) => {
                const { alt, src, width, height, left, top } = image;
                return (
                  <a
                    key={i}
                    href="https://stackla.com"
                    style={{
                      position: 'absolute',
                      left: left,
                      top: top
                    }}>
                    <img src={src} width={width} height={height} alt={alt} />
                  </a>
                );
              })}
            </React.Fragment>
          )}
        </JustifiedGrid>
      {/* <Gallery photos={photos} /> */}

        <div className="card-list flexbin flexbin-margin">
          {items.map(card => (
            <Card key={card.id} {...card} isSelected={card.id === selectedId} />
          ))}
        </div>
      </div>
    </main>
  );
}
