import React from "react";
import { Link } from "react-router-dom";
export default function zoneName(props) {
  // .f1{
  //     position: absolute;
  //     top: 62%;
  //     left: 10%;

  // }
  return (
    <div
    
      style={{
        position: "absolute",
        left: `${props.left}`,
        top: `${props.top}`,
       
        
        
        fontSize: `${props.fontSize || "16px"}`,
      }}
    >
      <Link to={`${props.path}`}>  <div 
    
      style={{
        height:`${props.height}`,
        width:`${props.width}`
      }}
      
      
      className="  pointer flex items-center justify-center transparent hoverName">{props.name}</div></Link>
    </div>
  );
}
