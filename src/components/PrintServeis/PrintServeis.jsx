import React from "react";
import "./PrintServeis.css";
import "../PrintAutismo/PrintAutismo.css";
import { Board } from "../Board/Board";
import { useNavigate } from "react-router-dom";
const PrintServeis = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="section-title-main-page section-title-main-page-serveis">
                <h1 className="title-page-serveis">SERVEIS</h1>
            </section>
            <section className="section-description-main-page">
                <p>
                    FEM CAMI es un centre especialitzat en el mon de l'autisme.
                </p>
                <p>
                    Som un equip de professionals que tenen una trajectoria de
                    mes de 10 anys dedicats a l'ensenyament.
                </p>
                <p>Els nostres principals valor son:</p>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <div className="div-h3-logo-individual-page div-h3-logo-individual-page-serveis">
                        <h3 className="h3-individual-page-info h3-individual-page-info-serveis">
                            Intervenció educativa
                        </h3>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363075/Fem%20Cami/Vectores/icons8-garden-100_mnaflb.png"
                            alt="logo seccion servicios"
                            className="img-individual-page-icon"
                        />
                    </div>
                    <div className="div-individual-page-info div-individual-page-info-serveis">
                        <p className="p-idividual-page-info p-idividual-page-info-serveis">
                            POR AMPLIAR
                        </p>
                        <div className="div-individual-page-divider-serveis"></div>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708391729/Fem%20Cami/Vectores/GrupoSumando_rigiph.png"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button
                        className="btn-individual-page"
                        onClick={() =>
                            navigate("/serveis/intervencio-educativa")
                        }
                    >
                        SABER MES
                    </button>
                </section>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <div className="div-h3-logo-individual-page div-h3-logo-individual-page-serveis">
                        <h3 className="h3-individual-page-info h3-individual-page-info-serveis">
                            Logopedia
                        </h3>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363075/Fem%20Cami/Vectores/icons8-garden-100_mnaflb.png"
                            alt="logo seccion servicios"
                            className="img-individual-page-icon"
                        />
                    </div>
                    <div className="div-individual-page-info div-individual-page-info-serveis">
                        <p className="p-idividual-page-info p-idividual-page-info-serveis">
                            La Logopèdia és la disciplina que engloba l’estudi,
                            la prevenció, la detecció, l’avaluació, diagnòstic i
                            el tractament dels trastorns de la comunicació
                            humana: les alteracions de la veu, de l’audició, de
                            la parla, del llenguatge (oral, escrit, gestual); i
                            de les funcions orofacials i deglutòries.
                        </p>
                        <div className="div-individual-page-divider-serveis"></div>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708391969/Fem%20Cami/Vectores/MesaTrabajando_mochh2.png"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button
                        className="btn-individual-page"
                        onClick={() => navigate("/serveis/logopedia")}
                    >
                        SABER MES
                    </button>
                </section>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <div className="div-h3-logo-individual-page div-h3-logo-individual-page-serveis">
                        <h3 className="h3-individual-page-info h3-individual-page-info-serveis">
                            Terapia ocupacional
                        </h3>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363075/Fem%20Cami/Vectores/icons8-garden-100_mnaflb.png"
                            alt="logo seccion servicios"
                            className="img-individual-page-icon"
                        />
                    </div>
                    <div className="div-individual-page-info div-individual-page-info-serveis">
                        <p className="p-idividual-page-info p-idividual-page-info-serveis">
                            POR AMPLIAR
                        </p>
                        <div className="div-individual-page-divider-serveis"></div>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708392537/Fem%20Cami/Vectores/Logopedia_zs55pw.png"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button
                        className="btn-individual-page"
                        onClick={() => navigate("/serveis/terapia-ocupacional")}
                    >
                        SABER MES
                    </button>
                </section>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <div className="div-h3-logo-individual-page div-h3-logo-individual-page-serveis">
                        <h3 className="h3-individual-page-info h3-individual-page-info-serveis">
                            Reeducacio Pedagogica
                        </h3>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363075/Fem%20Cami/Vectores/icons8-garden-100_mnaflb.png"
                            alt="logo seccion servicios"
                            className="img-individual-page-icon"
                        />
                    </div>
                    <div className="div-individual-page-info div-individual-page-info-serveis">
                        <p className="p-idividual-page-info p-idividual-page-info-serveis">
                            La reeducació és una intervenció psicopedagògica
                            personalitzada d’aquelles dificultats que presenta
                            l’infant en relació els aprenentatges i el rendiment
                            acadèmic, i en el seu desenvolupament.
                        </p>
                        <div className="div-individual-page-divider-serveis"></div>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708392343/Fem%20Cami/Vectores/TerapiaEstudi_yaqw1b.png"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button
                        className="btn-individual-page"
                        onClick={() =>
                            navigate("/serveis/reeducacio-pedagogica")
                        }
                    >
                        SABER MES
                    </button>
                </section>
            </section>
        </>
    );
};

export default PrintServeis;
