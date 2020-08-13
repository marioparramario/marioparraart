import React from "react";
// import Layout from "@components/layout";
// import '@styles/about.scss';
// import { Image, Transformation } from 'cloudinary-react';
import { photos } from "../components/photos";
import Gallery from "react-grid-gallery";


const About = props => (

  <Gallery
  images={photos}
  enableLightbox={true}
  showLightboxThumbnails={true}
  maxRows={3}
  backdropClosesModal
  // currentImage={3}
  // isOpen={ true}
/>
);

export {About};

