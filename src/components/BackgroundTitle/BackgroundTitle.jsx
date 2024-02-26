import React from "react";
import "./BackgroundTitle.css";
import { autismoQueEs, } from "../../data/arrayAutismo";



const BackgroundTitle = () => {
  return (
    <div className="background background-linear">
      <h1 className="title-pages-blue">{autismoQueEs[0].title}</h1>
    </div>
  )
}

export default BackgroundTitle