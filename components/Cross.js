
import React from "react"

const SVG = ({
  style={},
  width="100%",
  className="",
  viewBox = "0 0 20 20"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-cross ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
<g>
	<line className="st0" x1="19" y1="1" x2="1" y2="19"/>
	<line className="st0" x1="19" y1="19" x2="1" y2="1"/>
</g>

  </svg>
);


export default SVG;
