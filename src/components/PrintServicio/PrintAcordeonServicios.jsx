import React, { useState } from 'react'
import "./PrintAcordeonServicios.css"


const PrintAcordeonServicios = ({title,content,icon}) => {
  // const [seeAccordion, setSeeAccordion] = useState(true)
  return (
    <>
    <figure className="figure-service-home">
        
    
            <div className="div-figure-info">
            <img src={icon} alt="img-serveis" /> 
                <h2>{title}</h2>
                <p>{content}
                </p>
            </div>
      
       
        
 
    
  </figure>
  </>
  )
}

export default PrintAcordeonServicios