import React from "react";
import { items } from "./data";
import "./styles/flexbin.scss";
import { Card } from "./components/Card";
import { photos } from "./components/photos";
// import Gallery from "react-photo-gallery";
import JustifiedGrid from 'react-justified-grid'

export function List({ selectedId }) {

  return (
    <main className={`content-wrapper flex-vertical ${selectedId ? 'illustration-open' : ''}`}>
      <div className="container">
      <JustifiedGrid
      images={photos}
      rows={3}
      maxRowHeight={320}
      gutter={1}/>
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
