import React from "react";
import IconsSVG from "./icons.svg"

function Icons({name, color, size}) {

  return(
    <svg 
    fill={color} 
    stroke={color} 
    width={size} 
    height={size}
    id={name}
    >
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  )
}

export default Icons;