import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <footer>
  <div className="div-footer-menu">
  <div className="div-general-footer">
  <div className="div-menu-footer">
    <h4>Intervenció específica en autisme</h4>
      <ul className="footer-menu-ul">
        <li className="footer-menu-li"><a href="#">Condició de l'espectre autista</a></li>
        <li className="footer-menu-li"><a href="#">Intervenció psicoeducativa específica en autisme</a></li>
        <li className="footer-menu-li"><a href="#">Tallers d'habilitats socials</a></li>  
      </ul>
  </div>
  <div className="div-menu-footer">
    <h4>Serveis</h4>
    <ul className="footer-menu-ul">
      <li className="footer-menu-li"><a href="#">Teràpia ocupacional</a></li>
      <li className="footer-menu-li"><a href="#">Logopèdia</a></li> 
      <li className="footer-menu-li"><a href="#">Pràctiques centrades en la familía</a></li>
      <li className="footer-menu-li"><a href="#">Reeducació pedagògica</a></li>
      <li className="footer-menu-li"><a href="#">Reforç escolar</a></li>
      <li className="footer-menu-li"><a href="#">Planificació i tècniques d'estudi</a></li>
      <li className="footer-menu-li"><a href="#">Cos i moviment</a></li> 
    </ul>
  </div>
  <div className="div-menu-footer">
    <h4>Assessorament i col·laboració</h4>
    <ul className="footer-menu-ul">
      <li className="footer-menu-li"><a href="#">Formacions i tallers</a></li>
      <li className="footer-menu-li"><a href="#">Família i escola</a></li>       
    </ul>
  </div>  
  </div>  
  <div className="div-general2-footer">
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
  
  </div>
    </footer>
  )
}

export default Footer