import React from "react";
import "./style.css";

function Card(props) {
  return (
  <div className={"card cyan lighten-5 sticky-action "+props.size}>
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={props.image} alt={props.title}/>
    </div>
    <div className="card-content">
      <span className="card-title activator cyan-text text-darken-4">{props.title}<i className="material-icons right">expand_less</i></span>
    </div>
    <div className="card-action center">
      <a href={props.linkPage} target="_blank" rel="noopener noreferrer" className="actionLink cyan-text text-darken-3">Page</a>
      <a href={props.linkGithub} target="_blank" rel="noopener noreferrer" className="actionLink cyan-text text-darken-3">Github</a>
    </div>
    <div className="card-reveal cyan lighten-5">
      <span className="card-title cyan-text text-darken-4">{props.title}<i className="material-icons right">expand_more</i></span>
      <p className="left-align">{props.content}</p>
    </div>
  </div>
  );
}

export default Card;
