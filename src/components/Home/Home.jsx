import Description from "../Description/Description"
import Services from "../Services/Services"
import Team from "../Team/Team"
import "./Home.css"
import React from 'react'

const Home = () => {
  return (
    <main>
 
      <div className="div-Home-general">
          
          <Description/>
          <div className="div-title-home">
            <p className="p-title-home">Nostre equip</p>
            <div></div>
          </div>
          <Team/>
          <div className="div-title-home">
            <p className="p-title-home">Nostres servicis</p>
            <div></div>
          </div>
          <Services/>
      </div>

    </main>
  )
}

export default Home