import Description from "../Description/Description"
import Services from "../Services/Services"
import ServiciosAcordeon from "../Services/ServiciosAcordeon"
import Team from "../Team/Team"
import "./Home.css"
import React from 'react'

const Home = () => {
  return (
    <main>
 
      <div className="div-Home-general">
          
          <Description/>
          
          <div className="div-title-home title-home-serveis">
            <p className="p-title-home-serveis">Els nostres serveis</p>
            <div></div>
          </div>
          <ServiciosAcordeon/>
          <div className="div-title-home title-home-equip">
            <p className="p-title-home-equip">El nostre equip</p>
            <div></div>
          </div>
          <Team/>
          <div className="div-title-home title-home-autisme">
            <p className="p-title-home-autisme">Autisme</p>
            <div></div>
          </div>
          <ServiciosAcordeon/>
      </div>

    </main>
  )
}

export default Home