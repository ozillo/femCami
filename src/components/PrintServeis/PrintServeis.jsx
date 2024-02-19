import React from "react";
import "./PrintServeis.css";
const PrintServeis = () => {
    return (
        <>
            <section className="section-title-main-page-serveis">
                <h1 className="title-page">SERVEIS</h1>
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
                    <h3 className="h3-individual-page-info-serveis">
                        Intervenció educativa
                    </h3>
                    <div className="div-individual-page-info-serveis">
                        <p className="p-idividual-page-info-serveis">
                            POR AMPLIAR
                        </p>
                        <div className="div-individual-page-divider-serveis"></div>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708370766/Fem%20Cami/Vectores/Autismo101010_pfcqwn.png"
                            alt="imagen seccion que es el autismo"
                            className="img-individual-page-info"
                        />
                    </div>
                    <button className="btn-individual-page-serveis">
                        Coneix més
                    </button>
                </section>
            </section>
        </>
    );
};

export default PrintServeis;
