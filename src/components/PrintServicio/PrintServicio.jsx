import React, { useState } from 'react'

const PrintServicio = ({title, description, image, links}) => {
    const [seeFigure, setSeeFigure] = useState(true)

  return (
    <figure className="figure-servici-home">
        {
            seeFigure===true
            ?
            <>
            <div className="div-figure-img-tittle">
                <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702073081/Fem%20Cami/Servicios/Terapia%20Ocupacional/terapiaOcupacionalVector_mua7ha.png" alt="logopediaServeis" />
                <div className="div-figure-info">
                    <h2>{title}</h2>
                    <p>{description}
                    </p>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702254187/Fem%20Cami/Icon/mas-con-boton-de-tres-puntos_hsmapg.png" 
            alt="img-flecha"
            className="img-info-figure"
            onClick={()=>setSeeFigure(false)}
            />
            </>
            :
            <>
                <h2>Terapia ocupacional</h2>
                {links.map((elem)=>{return (
                    <>
                    <a>{elem}</a>
                    </>
                )})}
                <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702230893/Fem%20Cami/Icon/close_FILL0_wght400_GRAD0_opsz24_l3ofja.png" 
                alt="img-flecha"
                className="img-info-figure-back"
                onClick={()=>setSeeFigure(true)}
                />
            </>
        }
      </figure>
  )
}

export default PrintServicio