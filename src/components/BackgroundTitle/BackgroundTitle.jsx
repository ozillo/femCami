import React from "react";
import "./BackgroundTitle.css";

const BackgroundTitle = ({background,title,color}) => {
  return (
    <div className={`background ${background}`}>
      <h1 className={`title-pages-${color}`}>{title}</h1>
    </div>
  )
}


export default BackgroundTitle