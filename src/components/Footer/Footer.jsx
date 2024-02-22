import WaveBackground from "../WaveBackground/WaveBackground";
import "./Footer.css";
import React from "react";

const Footer = () => {
    return (
        <footer>
             {/* <WaveBackground />  */}
            {/* <div class="custom-shape-divider-top-1708371836">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        class="shape-fill"
                    ></path>
                </svg>
            </div> */}

            <div className="div-footer-menu">
                <div className="div-general-footer">
                    <div className="div-menu-footer">
                        <h4>Assessorament i col·laboració</h4>
                        <ul className="footer-menu-ul">
                            <li className="footer-menu-li">
                                <a href="#">Formacions i tallers</a>
                            </li>
                        </ul>
                    </div>

                    <div className="div-menu-footer">
                        <h4>Serveis</h4>
                        <ul className="footer-menu-ul">
                            <li className="footer-menu-li">
                                <a href="/serveis/intervencio-educativa">
                                    Intervenció Educativa
                                </a>
                            </li>
                            <li className="footer-menu-li">
                                <a href="/serveis/logopedia">Logopedia</a>
                            </li>
                            <li className="footer-menu-li">
                                <a href="/serveis/terapia-ocupacional">
                                    Teràpia ocupacional
                                </a>
                            </li>
                            <li className="footer-menu-li">
                                <a href="/serveis/reeducacio-pedagogica">
                                    Reeducació pedagogica
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="div-menu-footer">
                        <h4>Centre específic en autisme</h4>
                        <ul className="footer-menu-ul">
                            <li className="footer-menu-li">
                                <a href="/autisme/que-es-el-autisme">
                                    Que es el autisme
                                </a>
                            </li>
                            <li className="footer-menu-li">
                                <a href="/autisme/intervencio-psicoeducativa">
                                    Intervenció Psicoeducativa
                                </a>
                            </li>
                            <li className="footer-menu-li">
                                <a href="/autisme/programa-habilitats-socials">
                                    Programa d'habilitats socials
                                </a>
                            </li>
                            <li className="footer-menu-li">
                                <a href="/autisme/centre-recursos-CRAPG">
                                    Centre de recursos de autisme CRAPG
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="div-general2-footer">
                    <div className="div-contact-footer">
                        <h4>
                            CIE FEM CAMÍ 2023 - Carrer Alguer, 16 - Vilafranca
                            del Penedès - 637 059 313
                        </h4>
                    </div>
                    <div className="div-social-footer">
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1707307244/Fem%20Cami/Icon/iconmonstr-instagram-13-64_b87kji.png"
                            alt="instagram"
                            className="logo-social"
                        />
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1707303816/Fem%20Cami/Icon/iconmonstr-facebook-3-64_1_qdzzno.png"
                            alt="facebook"
                            className="logo-social"
                        />
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1707303816/Fem%20Cami/Icon/iconmonstr-youtube-6-64_zb9kmq.png"
                            alt="youtube"
                            className="logo-social"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
