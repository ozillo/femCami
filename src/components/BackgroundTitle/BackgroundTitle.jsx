import React from "react";
import "./BackgroundTitle.css";

const BackgroundTitle = ({background,title}) => {
  return (
    <div className={`background ${background}`}>
      <h1 className="title-pages-green">{title}</h1>
    </div>
  )
}


export default BackgroundTitle