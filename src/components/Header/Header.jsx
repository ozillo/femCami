import { useNavigate } from "react-router-dom";
import "./Header.css";
import React from "react";
import MenuBurger from "../MenuBurger/MenuBurger";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <nav className="menu-nav">
                <img
                    src="https://res.cloudinary.com/dtfugozix/image/upload/v1702123411/Fem%20Cami/Logo/logoFemCamiSinletr_zgu3xv.png"
                    alt="logo-femCami"
                    className="logoHeader"
                    onClick={() => navigate("/")}
                />
                <ul className="menu-nav-ul">
                    <li className="menu-nav-main-li">
                        <a href="/qui-som">Qui som</a>
                        <ul className="submenu-ul">
                            <li className="menu-li-hidden">
                                <a href="/qui-som">Equip</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-nav-main-li">
                        <a href="/autisme">Centre específic en Autisme</a>
                        <ul className="submenu-ul">
                            <li className="menu-li-hidden">
                                <a href="/autisme/que-es-el-autisme">
                                    Que es el autisme
                                </a>
                            </li>
                            <li className="menu-li-hidden">
                                <a href="/autisme/intervencio-psicoeducativa">
                                    Intervenció Psicoeducativa
                                </a>
                            </li>
                            <li className="menu-li-hidden">
                                <a href="/autisme/programa-habilitats-socials">
                                    Programa d'habilitats socials
                                </a>
                            </li>
                            <li className="menu-li-hidden">
                                <a href="/autisme/centre-recursos-CRAPG">
                                    Centre de recursos de autisme CRAPG
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-nav-main-li">
                        <a href="/serveis">Serveis</a>
                        <ul className="submenu-ul">
                            <li className="menu-li-hidden">
                                <a href="/serveis/intervencio-educativa">
                                    Intervenció Educativa
                                </a>
                            </li>
                            <li className="menu-li-hidden">
                                <a href="/serveis/logopedia">Logopedia</a>
                            </li>
                            <li className="menu-li-hidden">
                                <a href="/serveis/terapia-ocupacional">
                                    Teràpia ocupacional
                                </a>
                            </li>
                            <li className="menu-li-hidden">
                                <a href="/serveis/reeducacio-pedagogica">
                                    Reeducació pedagogica
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-nav-main-li">
                        <a href="/contacte">Contacte</a>
                    </li>
                </ul>
            </nav>
            <MenuBurger />
        </header>
    );
};

export default Header;
