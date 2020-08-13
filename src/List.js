import React from "react";
import { items } from "./data";
import "./styles/flexbin.scss";
import { Card } from "./components/Card";
import { photos } from "./components/photos";
import Gallery from "react-photo-gallery";
// import ProgressiveImage from "react-progressive-image";

export function List({ selectedId }) {

  return (
    <main className={`content-wrapper flex-vertical ${selectedId ? 'illustration-open' : ''}`}>
      <div className="container">
      <Gallery photos={photos} />
        {/* <ProgressiveImage
        src={require("./images/yasmeen.webp")}
        placeholder={require("./images/compressed-image.jpg")}>
        {(src) => (
          <img
            src={src}
            alt='Yasmeen Tariq'

          />
        )}
      </ProgressiveImage> */}

        <div className="card-list flexbin flexbin-margin">
          {items.map(card => (
            <Card key={card.id} {...card} isSelected={card.id === selectedId} />
          ))}
        </div>
      </div>
    </main>
  );
}
