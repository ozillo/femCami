import React, { useEffect, useRef } from "react";
import "./PrintAutismo.css";
import { useParams } from "react-router-dom";
const PrintAutismo = () => {
    const rute = useParams();

    useEffect(() => {
        console.log(rute);
    }, []);
    return (
        <>
            <section className="section-title-main-page">
                <h1 className="title-page">AUTISME</h1>
            </section>
            <section className="section-description-main-page">
                <p>FEM CAMI es centro especializado en el mundo del autismo.</p>
                <p>
                    Somos un equipo de profesionales que tienen una trayectoria
                    de mas de 10 años dedicados a la enseñanza.
                </p>
                <p>Nuestro principales valores son:</p>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <h3 className="h3-individual-page-info">
                        Que es el autismo?
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363072/Fem%20Cami/Vectores/icons8-tools-64_1_a3hsqb.png"
                            alt="logo titulo"
                            className="h3-individual-page-icon"
                        />
                    </h3>
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
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1702255755/Fem%20Cami/Vectores/logopedia_xhkedr.png"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button className="btn-individual-page">Coneix més</button>
                </section>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <h3 className="h3-individual-page-info">
                        Intervencio Psicoeducativa
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363074/Fem%20Cami/Vectores/icons8-brick-80_tojhwz.png"
                            alt="logo titulo"
                            className="h3-individual-page-icon"
                        />
                    </h3>
                    <div className="div-individual-page-info">
                        <p className="p-idividual-page-info">
                            La intervenció consisteix en treballar totes les
                            àrees del desenvolupament tenint en compte les
                            necessitats de l’infant i la família, sobretot en
                            l’àrea comunicativa i social, les habilitats
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
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1702028811/cld-sample-4.jpg"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button className="btn-individual-page">Coneix més</button>
                </section>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <h3 className="h3-individual-page-info">
                        Programa d'habilitats socials
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363074/Fem%20Cami/Vectores/icons8-bird-64_hjneu5.png"
                            alt="logo titulo"
                            className="h3-individual-page-icon"
                        />
                    </h3>
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
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1702028811/cld-sample-4.jpg"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button className="btn-individual-page">Coneix més</button>
                </section>
            </section>
            <section className="section-all-pages-main-page">
                <section className="section-individual-page-info">
                    <h3 className="h3-individual-page-info">
                        Centre de recurses CRAPG
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708363075/Fem%20Cami/Vectores/icons8-garden-100_mnaflb.png"
                            alt="logo titulo"
                            className="h3-individual-page-icon"
                        />
                    </h3>
                    <div className="div-individual-page-info">
                        <p className="p-idividual-page-info">
                            Fem Camí és centre col·laborador amb l’Associació
                            Autisme amb Futur Penedès-Garraf des de l’any 2021,
                            compartint projectes i actualment formant part del
                            CRAPG (Centre de Recursos d’Autisme Penedès –
                            Garraf).
                        </p>
                        <div className="div-individual-page-divider"></div>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1702028811/cld-sample-4.jpg"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button className="btn-individual-page">Coneix més</button>
                </section>
            </section>
        </>
    );
};

export default PrintAutismo;
