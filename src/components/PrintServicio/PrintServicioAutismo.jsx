import React from 'react'

const PrintServicioAutismo = (icon,title,content) => {
  return (
    <div>
    <img src={icon}
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