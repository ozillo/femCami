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
        
        <img src={icon}
            alt="img-flecha"
            className="img-info-figure-acordeon"
            onClick={()=>setSeeAccordion(!seeAccordion)}
            />
            <h2>{title}</h2>    
        </div>
            </>
            :
            <>
            <div className="div-figure-info">
            <img src={icon}
            alt="img-flecha"
            className="img-info-figure-acordeon-rot"
            onClick={()=>setSeeAccordion(!seeAccordion)}
            />
                        <h2>{title}</h2>

            </div>
            <div>
            <p>{content}</p>
            </div>
            </>
      }
        
    
            
      
       
        
 
    
  </figure>
  </>
  )
}

export default PrintAcordeonServicios