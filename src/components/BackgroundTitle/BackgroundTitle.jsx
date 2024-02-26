import React from "react";
import "./BackgroundTitle.css";




const BackgroundTitle = (props) => {
  return (
    <div className="background background-linear">
      <h1 className="title-pages-blue">{props.title}</h1>
    </div>
  )
}

export default BackgroundTitle