import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <footer>
  <div className="div-footer-menu">
  <div className="div-general-footer">
  <div className="div-menu-footer">
    <h4>Assessorament i col·laboració</h4>
    <ul className="footer-menu-ul">
      <li className="footer-menu-li"><a href="#">Formacions i tallers</a></li>  
    </ul>
  </div>  
  <div className="div-menu-footer">
    <h4>Serveis</h4>
    <ul className="footer-menu-ul">
      <li className="footer-menu-li"><a href="/serveis/intervencio-educativa">Intervenció Educativa</a></li>
      <li className="footer-menu-li"><a href="/serveis/logopedia">Logopedia</a></li> 
      <li className="footer-menu-li"><a href="/serveis/terapia-ocupacional">Teràpia ocupacional</a></li>
      <li className="footer-menu-li"><a href="/serveis/reeducacio-pedagogica">Reeducació pedagogica</a></li>      
    </ul>
  </div>
  <div className="div-menu-footer">
    <h4>Centre específic en autisme</h4>
      <ul className="footer-menu-ul">
        <li className="footer-menu-li"><a href="/autisme/que-es-el-autisme">Que es el autisme</a></li>
        <li className="footer-menu-li"><a href="/autisme/intervencio-psicoeducativa">Intervenció Psicoeducativa</a></li>
        <li className="footer-menu-li"><a href="/autisme/programa-habilitats-socials">Programa d'habilitats socials</a></li>  
        <li className="footer-menu-li"><a href="/autisme/centre-recursos-CRAPG">Centre de recursos de autisme CRAPG</a></li> 
      </ul>
  </div>
  </div>  
  <div className="div-general2-footer">
  <div className="div-contact-footer">
    <h4>CIE FEM CAMÍ 2023 - Carrer Alguer, 16 - Vilafranca del Penedès - 637 059 313</h4>
  </div>
  <div className="div-social-footer">
    <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1707307244/Fem%20Cami/Icon/iconmonstr-instagram-13-64_b87kji.png" 
        alt="instagram" 
        className="logo-social"
    />
    <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1707303816/Fem%20Cami/Icon/iconmonstr-facebook-3-64_1_qdzzno.png" 
        alt="facebook" 
        className="logo-social"
    />
    <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1707303816/Fem%20Cami/Icon/iconmonstr-youtube-6-64_zb9kmq.png" 
        alt="youtube" 
        className="logo-social"
    />
  </div>
  
  </div>
  
  </div>
    </footer>
  )
}

export default Footer