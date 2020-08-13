import React from "react";
// import Layout from "@components/layout";
// import '@styles/about.scss';
// import { Image, Transformation } from 'cloudinary-react';
import { photos } from "../components/photos";
// import Gallery from "react-grid-gallery";
import Gallery from "react-photo-gallery";


const About = props => (

//   <Gallery
//   images={photos}
//   enableLightbox={false}
//   // showLightboxThumbnails={true}
//   // maxRows={3}
//   // backdropClosesModal
//   // currentImage={3}
//   // isOpen={ true}
// />
<Gallery photos={photos} />
);

export {About};

