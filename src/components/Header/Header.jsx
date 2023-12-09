import "./Header.css"
import React from 'react'

const Header = () => {
  return (
  <header>
   
    <nav className="menu-nav">
    <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702123411/Fem%20Cami/Logo/logoFemCamiSinletr_zgu3xv.png" 
        alt="logo-femCami" 
        className="logoHeader"
   />
      <ul className="menu-nav-ul">
        <li className="menu-nav-main-li"><a href="#">Qui som</a>
          <ul className="submenu-ul">
            <li className="menu-li-hidden"><a href="#">Equip</a></li>
            <li className="menu-li-hidden"><a href="#">On treballem</a></li>
            <li className="menu-li-hidden"><a href="#">Contacte</a></li>
          </ul>
        </li>
        <li className="menu-nav-main-li"><a href="#">Serveis</a>
          <ul className="submenu-ul">
            <li className="menu-li-hidden"><a href="#">Terapia ocupacional</a></li>
            <li className="menu-li-hidden"><a href="#">Logopedia</a></li>
            <li className="menu-li-hidden"><a href="#">Practiques centrades en la familia</a></li>
            <li className="menu-li-hidden"><a href="#">Reeducació pedagogica</a></li>
            <li className="menu-li-hidden"><a href="#">Reforç escolar</a></li>
            <li className="menu-li-hidden"><a href="#">Planificació i tecniques d'estudi</a></li>
            <li className="menu-li-hidden"><a href="#">Cos i moviment</a></li>
          </ul>
        </li>
        <li className="menu-nav-main-li"><a href="#">Assesorament</a>
          <ul className="submenu-ul">
            <li className="menu-li-hidden"><a href="#">Formació i tallers</a></li>
            <li className="menu-li-hidden"><a href="#">Família i escola</a></li>
          </ul>
        </li>
        <li className="menu-nav-main-li"><a href="#">Col·laboradors</a>
          <ul className="submenu-ul">
            <li className="menu-li-hidden"><a href="#">CRAPG</a></li>
            <li className="menu-li-hidden"><a href="#">Autisme amb futur</a></li>
          </ul>
          </li>
        <li className="menu-nav-main-li"><a href="#">Contacte</a></li>
      </ul>
      
    </nav>
  </header>
  )
}

export default Header