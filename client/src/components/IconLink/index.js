import React from "react";
import "./style.css";

function IconLink(props) {
  return (
    <a href={props.link}><i className={`${props.fas?"fas":"fab"} fa-${props.icon}`}/></a>
  );
}

export default IconLink;
