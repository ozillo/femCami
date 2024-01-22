import React, { useState } from 'react'
import "./PrintAcordeonServicios.css"


const PrintAcordeonServicios = ({title,content,icon}) => {
  const [seeAccordion, setSeeAccordion] = useState(false)
  return (
    <>
    <figure className="figure-service-home">
      {

        seeAccordion===false
        ?
        <>
       
        <div className="div-figure-info">
        <h2>{title}</h2>
        <img src={icon}
            alt="img-flecha"
            className="img-info-figure"
            onClick={()=>setSeeAccordion(true)}
            />
                
        </div>
            </>
            :
            <>
            <img src={icon}
            alt="img-flecha"
            className="img-info-figure-back"
            onClick={()=>setSeeAccordion(true)}
            />
            <p>{content}</p>
            </>
      }
        
    
            
      
       
        
 
    
  </figure>
  </>
  )
}

export default PrintAcordeonServicios