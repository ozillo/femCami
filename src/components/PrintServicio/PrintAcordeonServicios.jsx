import React, { useState } from 'react'


const PrintAcordeonServicios = ({title,content,icon}) => {
    const [seeAccordion, setSeeAccordion] = useState(true)
  return (
    <figure className="figure-service-home">
    {
        seeAccordion===true
        ?
        <>
        <div className="div-figure-img-tittle">
            <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png" alt="logopediaServeis" /> 
            <div className="div-figure-info">
                <h2>{title}</h2>
                <p>{content}
                </p>
            </div>
        </div>
        </>
        :
 
    }
  </figure>
  )
}

export default PrintAcordeonServicios