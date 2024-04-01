import React, { useState } from 'react'
import "./PrintServicioAutismo.css"

const PrintServicioAutismo = ({icon,title,content}) => {
  return (
    <div className='div-section-autismo'>
    <img src={icon}
    className="img-service-autismo"
     alt="img-icon" 
     />
    <h3>
    {title}
    </h3>
    <p>
    {content}
    </p>
    <button className='btn-section-autismo'>
      SABER MES
    </button>
    </div>
  )
}

export default PrintServicioAutismo