import "./Header.css"
import React from 'react'

const Header = () => {
  return (
<header>
    <nav className="menu-nav">
      <ul className="menu-quisom">
        <li><a href="#">Qui som</a>
      <ul>
        <li><a href="#">Equip</a></li>
        <li><a href="#">On treballem</a></li>
        <li><a href="#">Contacte</a></li>
      </ul>
      </li>
        <li><a href="#">Serveis</a>
        <ul className="menu-serveis">
        <li><a href="#">Terapia ocupacional</a></li>
        <li><a href="#">Logopedia</a></li>
        <li><a href="#">Practiques centrades en la familia</a></li>
        <li><a href="#">Reeducació pedagogica</a></li>
        <li><a href="#">Reforç escolar</a></li>
        <li><a href="#">Planificació i tecniques d'estudi</a></li>
        <li><a href="#">Cos i moviment</a></li>
          </ul>
          </li>
          <li><a href="#">Assesorament</a>
        <ul className="menu-assesorament">
        <li><a href="#">Formació i tallers</a></li>
        <li><a href="#">Família i escola</a></li>
          </ul>
          </li>
          <li><a href="#">Col·laboradors</a>
        <ul className="menu-colaboradors">
        <li><a href="#">CRAPG</a></li>
        <li><a href="#">Autisme amb futur</a></li>
          </ul>
          </li>
          <li><a href="#">Contacte</a></li>
        </ul>
      
      </nav>
    </header>
  )
}

export default Header