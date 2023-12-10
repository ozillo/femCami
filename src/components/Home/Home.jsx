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
            <p className="p-title-home">El nostre equip</p>
            <div></div>
          </div>
          <Team/>
          <div className="div-title-home">
            <p className="p-title-home">Els nostres serveis</p>
            <div></div>
          </div>
          <Services/>
      </div>

    </main>
  )
}

export default Home