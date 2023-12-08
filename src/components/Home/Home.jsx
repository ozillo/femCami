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
          <Team/>
          <Services/>
      </div>

    </main>
  )
}

export default Home