import React from "react";
import "./BackgroundTitle.css";

const BackgroundTitle = ({title}) => {
  return (
    <div className="background background-linear">
      <h1 className="title-pages-blue">{title}</h1>
    </div>
  )
}

export default BackgroundTitle