import React, { useState } from "react";
import "./MenuBurger.css";
import { useNavigate } from "react-router-dom";

const MenuBurger = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const [showList, setShowList] = useState(0);

    const toggleList = (num) => {
        setShowList((prevNum) => (prevNum === num ? 0 : num));
    };

    const navigate = useNavigate();
    return (
        <nav className="menu-nav-burger">
            <div className="div-logos-menu-burger">
                <img
                    src="https://res.cloudinary.com/dtfugozix/image/upload/v1702123411/Fem%20Cami/Logo/logoFemCamiSinletr_zgu3xv.png"
                    alt="logo-femCami"
                    className="logoHeader"
                    onClick={() => navigate("/")}
                />
                <img
                    src="https://res.cloudinary.com/dtfugozix/image/upload/v1706691173/Fem%20Cami/Icon/menu_FILL0_wght400_GRAD0_opsz24_otprbb.png"
                    alt="menu burger icon"
                    className="logo-menu-burger"
                    onClick={() => setOpenBurger(!openBurger)}
                />
            </div>
            {openBurger && (
                <div className="div-menu-burger">
                    <ul className="ul-main-menu-burger">
                        <li className="li-menu-burger">
                            <a href="/qui-som">Qui som?</a>
                        </li>
                        <li className="li-menu-burger">
                            <h3 onClick={() => toggleList(2)}>
                                Center específic en Autisme
                            </h3>
                            {showList === 2 && (
                                <ul className="ul-menu-burger-hidden">
                                    <li className="li-menu-burger-hidden">
                                        <a href="">Qué es el autisme?</a>
                                    </li>
                                    <li className="li-menu-burger-hidden">
                                        <a href="">
                                            Intervenció psicoeducativa
                                        </a>
                                    </li>
                                    <li className="li-menu-burger-hidden">
                                        <a href="">
                                            Programa d'habilitats socials
                                        </a>
                                    </li>
                                    <li className="li-menu-burger-hidden">
                                        <a href="">
                                            Center de recursos de autisme CRAPG
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="li-menu-burger">
                            <h3 onClick={() => toggleList(3)}>
                                Center específic en Autisme
                            </h3>
                            {showList === 3 && (
                                <ul className="ul-menu-burger-hidden">
                                    <li className="li-menu-burger-hidden">
                                        <a href="">Qué es el autisme?</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            Intervenció psicoeducativa
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            Programa d'habilitats socials
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            Center de recursos de autisme CRAPG
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="li-menu-burger">
                            <h3 onClick={() => toggleList(4)}>
                                Center específic en Autisme
                            </h3>
                            {showList === 4 && (
                                <ul className="ul-menu-burger-hidden">
                                    <li className="li-menu-burger-hidden">
                                        <a href="">Qué es el autisme?</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            Intervenció psicoeducativa
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            Programa d'habilitats socials
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            Center de recursos de autisme CRAPG
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default MenuBurger;
