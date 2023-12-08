import Description from "../Description/Description"
import Services from "../Services/Services"
import Team from "../Team/Team"
import "./Home.css"
import React from 'react'

const Home = () => {
  return (
    <main>
    <section>
    <Description/>
    </section>
    <section>
    <Team/>
    </section>
    <section>
    <Services/>
    </section>

    </main>
  )
}

export default Home