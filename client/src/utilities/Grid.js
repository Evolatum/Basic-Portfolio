// Dependencies
import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a materialize container without worrying about class names
export function Container({children}) {
  return <div className="container">{children}</div>;
}

// This Row component lets us use a materialize row without having to think about class names
export function Row({children }) {
  return <div className={"row"}>{children}</div>;
}

// This Col component lets us size materialize columns with less syntax
export function Col({ size, children, center }) {
  return <div className={`col ${size} ${center?"center":"left"}`}>{children}</div>;
}

/*.row{
    margin-bottom: 25px;
}

.container{
    width:300px;
    margin: 10px auto;
}

@media only screen and (min-width : 601px) {
    .container{
        width:560px;
    }
}

@media only screen and (min-width : 993px) {
    .container{
        width: 900px;
    }
}

@media only screen and (min-width : 1201px) {
    .container{
        width:1150px;
    }
}*/