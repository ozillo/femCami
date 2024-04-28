import React, { useEffect, useRef } from "react";
import "./PrintAutismo.css";
import BackgroundTitle from "../BackgroundTitle/BackgroundTitle";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const PrintAutismo = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* <section className="section-title-main-page">
                <h1 className="title-page">AUTISME</h1>
            </section> */}
            <BackgroundTitle title="SERVEIS" background={`background-linear-green`} color={`green`}/>
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
                    <div className="div-h3-logo-individual-page">
                        <h3 className="h3-individual-page-info">
                            Què és l'autisme
                        </h3>
                        {/* <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708390949/Fem%20Cami/Vectores/AutismoIcono_ntqbcv.png"
                            alt="logo seccion servicios"
                            className="img-individual-page-icon"
                        /> */}
                    </div>
                    <div className="div-individual-page-info">
                        <p className="p-idividual-page-info">
                            L’autisme és una variant neurològica natural que pot
                            comportar alteracions en el desenvolupament de
                            diverses funcions del sistema nerviós central. Es
                            manifesta en una diversitat d’estils cognitius i
                            formes d’experimentar, sentir i percebre el món. Les
                            persones en l’espectre autista poden tenir diferent
                            habilitats, interessos i maneres de processar la
                            informació. Es important reconèixer i respectar la
                            neurodivergència, entenen que l’autisme és una
                            condició de vida.
                        </p>
                        <div className="div-individual-page-divider"></div>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708389293/Fem%20Cami/Vectores/autismeLetrero_r7dqco.png"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button
                        className="btn-individual-page-autisme"
                        onClick={() => navigate("/autisme/que-es-el-autisme")}
                    >
                        SABER MES
                    </button>
                </section>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <div className="div-h3-logo-individual-page">
                        <h3 className="h3-individual-page-info">
                            Intervenció psicoeducativa
                        </h3>
                        {/* <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363072/Fem%20Cami/Vectores/icons8-tools-64_1_a3hsqb.png"
                            alt="logo seccion servicios"
                            className="img-individual-page-icon"
                        /> */}
                    </div>
                    <div className="div-individual-page-info">
                        <p className="p-idividual-page-info">
                            L'intervenció Psicoeducativa consisteix en treballar
                            totes les àrees del desenvolupament tenint en compte
                            les necessitats de l’infant i la família, sobretot
                            en l’àrea comunicativa i social, les habilitats
                            personals, d’aprenentatge i d’autonomia. Ens basem
                            en intervencions focalitzades i programes integrals
                            basats en evidència científica com estratègies,
                            tècniques, mètodes i enfocs específics per persones
                            autistes, basant-se en la psicoeducació. Duem a
                            terme intervencions combinades per atendre la
                            persona com ésser únic.
                        </p>
                        <div className="div-individual-page-divider"></div>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708383150/Fem%20Cami/Vectores/BanderasComprimido_vqbj9h.png"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button
                        className="btn-individual-page-autisme"
                        onClick={() =>
                            navigate("/autisme/intervencio-psicoeducativa")
                        }
                    >
                        SABER MES
                    </button>
                </section>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <div className="div-h3-logo-individual-page">
                        <h3 className="h3-individual-page-info">
                            Programa d'habilitats socials
                        </h3>
                        {/* <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363074/Fem%20Cami/Vectores/icons8-brick-80_tojhwz.png"
                            alt="logo seccion servicios"
                            className="img-individual-page-icon"
                        /> */}
                    </div>
                    <div className="div-individual-page-info">
                        <p className="p-idividual-page-info">
                            Les habilitats socials són un conjunt de
                            competències conductuals que possibiliten que la
                            persona mantingui relacions socials positives amb
                            els altres i que afronti, de manera efectiva i
                            adaptativa, les demandes del seu entorn social,
                            aspectes que contribueixen significativament, per
                            una part, a l’acceptació per part dels companys i,
                            per altra, a un ajut i adaptació social adequat. Una
                            de les condicions que presenten les persones amb
                            autisme és la dificultat de comprensió i la gestió
                            de les relacions socials. És per això que des de Fem
                            Camí duem a terme sessions grupals per treballar les
                            habilitats socials i personals amb professionals
                            especialistes en autisme. A través de la interacció,
                            comunicació i el joc treballem aspectes necessaris
                            per el desenvolupament de la persona i la inclusió
                            social.
                        </p>
                        <div className="div-individual-page-divider"></div>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708390505/Fem%20Cami/Vectores/ProfesoraAlumnos_n2ylfk.png"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button
                        className="btn-individual-page-autisme"
                        onClick={() =>
                            navigate("/autisme/programa-habilitats-socials")
                        }
                    >
                        SABER MES
                    </button>
                </section>
            </section>
        </>
    );
};

export default PrintAutismo;
