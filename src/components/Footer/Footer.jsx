import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <footer>
  <div className="div-social-footer">
    <p>Instagram</p>
    <p>Facebook</p>
    <p>Contact</p>
  </div>
  <div className="div-menu-footer">
  <div className="div-section2-footer">
    <h4>Intervenció específica en autisme</h4>
      <ul>
        <li>
          <a href="#">Condició de l'espectre autista</a>
          <a href="#">Intervenció psicoeducativa específica en autisme</a>
          <a href="#">Tallers d'habilitats socials</a>
        </li>
      </ul>
  </div>
  <div className="div-section3-footer">
    <h4>Serveis</h4>
    <ul>
      <li>
        <a href="#">Teràpia ocupacional</a>
        <a href="#">Logopèdia</a>
        <a href="#">Pràctiques centrades en la familía</a>
        <a href="#">Reeducació pedagògica</a>
        <a href="#">Reforç escolar</a>
        <a href="#">Planificació i tècniques d'estudi</a>
        <a href="#"> Cos i moviment</a>
      </li>
    </ul>
  </div>
  <div>
    <h4>Assessorament i col·laboració</h4>
    <ul>
      <li>
        <a href="#">Formacions i tallers</a>
        <a href="#">Família i escola</a>


      </li>
    </ul>
  </div>  
  </div>
    </footer>
  )
}

export default Footer