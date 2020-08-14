import React from "react";
import { func, string } from "prop-types";
// import Switcher from "./Switcher";
import styled from "styled-components";
import { useCycle } from "framer-motion";
import { motion } from "framer-motion";

const SVG = ({
  style = {},
  width = "100%",
  className = "switcher",
  viewBox = "0 0 20 20",
}) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-logo ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path className="icon-path" d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke={({ theme }) => theme.body} stroke-width="2" stroke-miterlimit="10" />
      <path className="icon-path-alt" d="M18.9151 9.94727C18.9151 14.9142 14.9245 18.9048 9.95755 18.9048C4.99057 18.9048 1 14.9142 1 9.94727H18.9151Z" />
    </svg>
  );


const Toggle = ({ theme, toggleTheme }) => {
  const [animate, cycle] = useCycle(
    {rotate: 0 },
    {rotate: 180 }
  );
  return (

    <>
      <motion.div
      animate={animate}
      transition={{
        ease: "linear",
        duration: 0.5
       }}
      onTap={() => cycle()}
      className="button">
        <div 
        className="flex"
        onClick={toggleTheme}>
          <SVG />
        </div>
      </motion.div>
    </>
  );

};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
