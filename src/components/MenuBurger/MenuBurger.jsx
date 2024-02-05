import React, { useState } from "react";
import "./MenuBurger.css";
import { useNavigate } from "react-router-dom";
import { GrFormDown, GrFormUp } from "react-icons/gr";
const MenuBurger = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const [showList, setShowList] = useState(0);

    const closeMenu = (rute) => {
        setOpenBurger(!openBurger);
        navigate(rute);
    };

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
                            <div className="div-title-icon-display">
                                <h3 onClick={() => closeMenu("/qui-som")}>
                                    Qui Som?
                                </h3>
                                {showList === null ? (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(1)}
                                    >
                                        <GrFormDown />
                                    </div>
                                ) : showList === 1 ? (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(1)}
                                    >
                                        <GrFormUp />
                                    </div>
                                ) : (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(1)}
                                    >
                                        <GrFormDown />
                                    </div>
                                )}
                            </div>

                            {showList === 1 && (
                                <ul className="ul-menu-burger-hidden">
                                    <li className="li-menu-burger-hidden">
                                        <a href="/qui-som">Equip</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="li-menu-burger">
                            <div className="div-title-icon-display">
                                <h3 onClick={() => closeMenu("/autisme")}>
                                    Center específic en Autisme
                                </h3>
                                {showList === null ? (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(2)}
                                    >
                                        <GrFormDown />
                                    </div>
                                ) : showList === 2 ? (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(2)}
                                    >
                                        <GrFormUp />
                                    </div>
                                ) : (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(2)}
                                    >
                                        <GrFormDown />
                                    </div>
                                )}
                            </div>
                            {showList === 2 && (
                                <ul className="ul-menu-burger-hidden">
                                    <li className="li-menu-burger-hidden">
                                        <a href="/autisme/que-es-el-autisme">
                                            + Que es el autisme
                                        </a>
                                    </li>
                                    <li className="li-menu-burger-hidden">
                                        <a href="/autisme/intervencio-psicoeducativa">
                                            + Intervenció Psicoeducativa
                                        </a>
                                    </li>
                                    <li className="li-menu-burger-hidden">
                                        <a href="/autisme/programa-habilitats-socials">
                                            + Programa d'habilitats socials
                                        </a>
                                    </li>
                                    <li className="li-menu-burger-hidden">
                                        <a href="/autisme/centre-recursos-CRAPG">
                                            + Centre de recursos de autisme
                                            CRAPG
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="li-menu-burger">
                            <div className="div-title-icon-display">
                                <h3 onClick={() => closeMenu("/serveis")}>
                                    Serveis
                                </h3>
                                {showList === null ? (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(3)}
                                    >
                                        <GrFormDown />
                                    </div>
                                ) : showList === 2 ? (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(3)}
                                    >
                                        <GrFormUp />
                                    </div>
                                ) : (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(3)}
                                    >
                                        <GrFormDown />
                                    </div>
                                )}
                            </div>
                            {showList === 3 && (
                                <ul className="ul-menu-burger-hidden">
                                    <li className="li-menu-burger-hidden">
                                        <a href="/serveis/intervencio-educativa">
                                            Intervenció Educativa
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/serveis/logopedia">
                                            Logopedia
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/serveis/terapia-ocupacional">
                                            Teràpia ocupacional
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/serveis/reeducacio-pedagogica">
                                            Reeducació pedagogica
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="li-menu-burger">
                            <div className="div-title-icon-display">
                                <h3 onClick={() => closeMenu("/contacte")}>
                                    Contacte
                                </h3>
                                {showList === null ? (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(4)}
                                    >
                                        <GrFormDown />
                                    </div>
                                ) : showList === 2 ? (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(4)}
                                    >
                                        <GrFormUp />
                                    </div>
                                ) : (
                                    <div
                                        className="div-r-icon-space"
                                        onClick={() => toggleList(4)}
                                    >
                                        <GrFormDown />
                                    </div>
                                )}
                            </div>

                            {showList === 4 && (
                                <ul className="ul-menu-burger-hidden">
                                    <li className="li-menu-burger-hidden">
                                        <a href="/contacte">Contacte</a>
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
