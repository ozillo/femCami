import React, { useState } from 'react'
import "./PrintServicioAutismo.css"

const PrintServicioAutismo = ({icon,title,content}) => {
  return (
    <div className='div-section-autismo'>
    <img src={icon}
    className='img-service-autismo'
     alt="img-icon" 
     />
    <h3>
    {title}
    </h3>
    <p>
    {content}
    </p>
    </div>
  )
}

export default PrintServicioAutismo