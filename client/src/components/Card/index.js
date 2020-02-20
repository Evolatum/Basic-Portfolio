import React from "react";
import "./style.css";

function Card(props) {
  return (
  <div className={"card sticky-action "+props.size}>
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={props.image} alt={props.title}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
    </div>
    <div className="card-action center">
      <a href={props.linkPage} target="_blank" rel="noopener noreferrer" className="actionLink">Page</a>
      <a href={props.linkGithub} target="_blank" rel="noopener noreferrer" className="actionLink">Github</a>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
      <p className="left-align">{props.content}</p>
    </div>
  </div>
  );
}

export default Card;
