import React from 'react';
import { motion } from "framer-motion";
import { imageHover } from "../helpers/Animations";

export function GridImage(props) {
  const {
    src,
    width,
    height,
    alt,
    onLoad = () => {}
  } = props;

  return (
    <motion.img
      initial="rest"
      variants={imageHover}
      src={src}
      width={width}
      height={height}
      alt={alt}
      onLoad={onLoad}
    />
  );
};
