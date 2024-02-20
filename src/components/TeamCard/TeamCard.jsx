import { dataTeam } from "../../data/data"
import "./TeamCard.css"


import React from 'react'

const TeamCard = () => {
  return (
    <>
    <section className="section-all-cards">
    <div class="card">
    <div class="imgBx">
    <img
    src={dataTeam[0].img}
    alt="iconTreballadors"
    className="img-page-treballadors"
    />
    </div>
    <div className="details">
    <h2>{dataTeam[0].name}<br/><span>{dataTeam[0].job}</span></h2>
    </div>
    </div>
    <div className="information-card">

    </div>
    </section>
      
    </>
  )
  
}

export default TeamCard