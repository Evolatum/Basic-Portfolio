import React from "react";
import "./style.css";

// This file exports both the Collapsible and CollapsibleItem components

export function Collapsible({ children }) {
  return (
    <ul className="left collapsible" style={{width:"90%",marginLeft:"5%"}}>{children}</ul>
  );
};

export function CollapsibleItem(props){
  return (
  <li>
    <div className="collapsible-header">{props.title}</div>
    <div className="collapsible-body">
      {props.content}
      <a href={props.link} target="_blank" rel="noopener noreferrer"> More..</a>
    </div>
  </li>
  );
};