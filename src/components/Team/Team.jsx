import { dataTeam } from "../../data/data"
import "./Team.css"
import React, { useEffect, useState } from 'react'

const Team = () => {
  const [indexArray, setIndexArray] = useState(0)

  useEffect(()=>{
    console.log(indexArray)
    console.log(dataTeam[indexArray])
  
  },[indexArray])
  return (
    <section className="team-section">
      <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702082422/Fem%20Cami/Icon/chevron_left_FILL0_wght400_GRAD0_opsz24_eoe8kb.png" 
      alt="" 
      onClick={()=>{indexArray==0 ? setIndexArray(indexArray) : setIndexArray(indexArray-1)}}
      />
      <figure className="figure-treballador-second">
        <h3>{dataTeam[indexArray].name}</h3>
        <img src={dataTeam[indexArray].img} alt={`name de {dataTeam[3].name}`} className="image-treballador" />
      </figure>
      <figure className="figure-treballador-principal">
        <h3>{dataTeam[indexArray+1].name}</h3>
        <img src={dataTeam[indexArray+1].img} alt={`name de {dataTeam[3].name}`} className="image-treballador" />
      </figure>
      <figure className="figure-treballador-second">
        <h3>{dataTeam[indexArray+2].name}</h3>
        <img src={dataTeam[indexArray+2].img} alt={`name de {dataTeam[3].name}`} className="image-treballador" />
      </figure>
      <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702082464/Fem%20Cami/Icon/chevron_right_FILL0_wght400_GRAD0_opsz24_dy4ost.png" 
      alt="" 
      onClick={()=>{indexArray==6 ? setIndexArray(indexArray) : setIndexArray(indexArray+1)}}
      />

    </section>
  )
}

export default Team