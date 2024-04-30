import { useState } from "react";
import React from "react";
import PrintServicioAutismo from "../PrintServicio/PrintServicioAutismo";
import "./ServiciosAutismo.css";
import AcordeonSlider from "../AcordeonSlider/AcordeonSlider";

const ServiciosAutismo = () => {
    return (
        <>
            <section className="section-home-autismo">
                {/* <div className="div-info-autismo">
      <div className="container">
      SOM CENTRE
      <div className="flip">
      <div><div>ESPECÍFIC</div></div>
      <div><div>ESPECÍFIC</div></div>
      <div><div>ESPECÍFIC</div></div>
      </div>
      EN AUTISME
      </div>
      </div> */}
                <div className="div-info-autismo">
                    <h2 className="h2-info-autimos-centre-especific">CENTRE</h2>
                    <h2 className="h2-info-autimos-centre-especific h2-info-autisme-strong">
                        ESPECÍFIC
                    </h2>
                    <h2 className="h2-info-autimos-centre-especific">
                        EN AUTISME
                    </h2>
                </div>
                <div className="div-description-service-autismo">
                    <p>
                        Actualment, Fem Camí, és un centre de referència en
                        autisme en la nostra comarca.
                    </p>
                    <p>
                        Portem més de 10 anys d’experiència, d’actualització i
                        formació especialitzada,
                    </p>
                    <p>
                        Estem acompanyant a les famílies i els seus fills/es en
                        l’espectre autista, també adults/es autistes en el seu
                        dia a dia, donant suport a la persona i a la família per
                        una millor qualitat de vida, benestar emocional i
                        sensorial.
                    </p>
                </div>
                <div className="div-all-servicesAutismo">
                    <div className="div-service-autismo">
                        <PrintServicioAutismo
                            icon={
                                "https://res.cloudinary.com/dtfugozix/image/upload/v1706486965/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/iconGlassesOrange_wcqdtr.png"
                            }
                            title={"Intervenció Psicoeducativa"}
                            content={`La nostra intervenció es basa en treballar totes les àrees de desenvolupament,
                                habilitats personals, comunicatives i socials, i habilitats d’aprenentatge i d’autonomia,
                                amb intervencions focalitzades i integrals específiques en autisme, millorant la qualitat
                                de vida familiar i de la persona, com el seu benestar emocional i sensorial.`}
                            linkTo={"/autisme/intervencio-psicoeducativa"}
                        />
                    </div>
                    <div className="div-service-autismo">
                        <PrintServicioAutismo
                            icon={
                                "https://res.cloudinary.com/dtfugozix/image/upload/v1706489131/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/iconBooksBlue_iw8i5a.png"
                            }
                            title={"Programa d'activitats socials"}
                            content={`Duem a terme el programa d’habilitats socials de forma grupal, on ara mateix
                                comptem amb quatre grups segons edat, acompanyats per les professionals del
                                centre. Dins del programa es treballa les habilitats comunicatives i socials, les habilitats
                                personals, l’educació socioemocional, l’autoconeixement i autodeterminació, les
                                relacions interpersonals i cercles d’amistat, l’afectivitat i sexualitat, entre d’altres.`}
                            linkTo={"/autisme/programa-habilitats-socials"}
                        />
                    </div>
                    <div className="div-service-autismo">
                        <PrintServicioAutismo
                            icon={
                                "https://res.cloudinary.com/dtfugozix/image/upload/v1706489429/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/iconBoxGreen_xb3ibo.png"
                            }
                            title={"Centre de recursos d'autisme CRAPG"}
                            content={`Som centre col·laborador amb l’Associació Autisme amb Futur, una associació de
                                famílies amb fills/es en l’espectre autista. Col·laborem dins del projecte CRAPG (Centre
                                de Recursos per l’Autisme Penedès-Garraf) on acompanyem famílies sòcies en la
                                intervenció del seu fill/a, els grups d’habilitats socials i altres projectes en comú.`}
                            linkTo={"/autisme/centre-recursos-CRAPG"}
                        />
                    </div>
                </div>
            </section>
            {/* <AcordeonSlider arrayData={arrayLogpedia}/> */}
        </>
    );
};

export default ServiciosAutismo;
