import Description from "../Description/Description"
import Services from "../Services/Services"
import Team from "../Team/Team"
import "./Home.css"
import React from 'react'

const Home = () => {
  return (
    <main>
      <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702028834/Fem%20Cami/logoFemCami_eqfgop.png" 
        alt="logo-femCami" 
        className="logoFemCami"
      />
      <div className="div-Home-general">
          <Description/>
          <Team/>
          <Services/>
      </div>

    </main>
  )
}

export default Home