import React from "react";
import "./style.css";

function IframeCard(props) {
  return (
    <div className="center card-panel cyan lighten-5">
      <iframe src={props.src}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""
      width="350" height="300" frameborder="0"></iframe>
    </div>
  );
}

export default IframeCard;
