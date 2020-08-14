import React, { Component } from 'react';
import JustifiedGrid from 'react-justified-grid';
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
        <JustifiedGrid images={Photos} rows={3} maxRowHeight={320} gutter={10} className="justified-grid">
          {processedImages => (
            <React.Fragment>
              {processedImages.map((image, i) => {
                const { alt, src, width, height, left, top } = image;
                return (
                  <a
                    key={i}
                    href="https://oq.design"
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
