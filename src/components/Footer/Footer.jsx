import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <footer>
  <div className="div-general-footer">
  <div className="div-social-footer">
    <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702214925/Fem%20Cami/Icon/instagram_icon_138461_fakkj3.png" 
        alt="instagram" 
        className="logo-social"
    />
    <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702214849/Fem%20Cami/Icon/Facebook_Square_icon-icons.com_49948_h5y8gx.png" 
        alt="facebook" 
        className="logo-social"
    />
    <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702214689/Fem%20Cami/Icon/youtube_logo_icon_214667_imtmqt.png" 
        alt="youtube" 
        className="logo-social"
    />
  </div>
  <div className="div-contact-footer">
    <h4>CIE FEM CAMÍ - Carrer Alguer, 16 - Vilafranca del Penedès - 637 059 313</h4>
  </div>
  </div>
  <div className="div-general2-footer">
  <div className="div-themes-footer">
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