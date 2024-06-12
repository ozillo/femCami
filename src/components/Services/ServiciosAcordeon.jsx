import React, { useEffect, useState } from "react";
import "./ServiciosAcordeon.css";
import PrintAcordeonServicios from "../PrintServicio/PrintAcordeonServicios";
import DividerEslogan from "../DividerEslogan/DividerEslogan";

const ServiciosAcordeon = () => {
    const [seeContent, setSeeContent] = useState(1);
    const toggleState = (index) => {
        setSeeContent((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="section-accordion-services">
            <div className="div-all-Accordion">
                <div className="div-Accordion">
                    <PrintAcordeonServicios
                        title={"Intervenció educativa"}
                        content={`La Intervenció educativa és la disciplina que engloba l’estudi,la prevenció, la detecció, l’evaluació, diagnòtic i el tractament dels trastorns de la comunicació humana.`}
                        icon={
                            "https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"
                        }
                        onClick={() => toggleState(1)}
                        visible={seeContent === 1}
                    />
                </div>
                <div className="div-Accordion">
                    <PrintAcordeonServicios
                        title={"Logopèdia"}
                        content={`La Logopèdia és la disciplina que engloba l’estudi, la prevenció, la detecció, l’evaluació, diagnòtic i el tractament dels trastorns de la comunicació humana.`}
                        icon={
                            "https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"
                        }
                        onClick={() => toggleState(2)}
                        visible={seeContent === 2}
                    />
                </div>
                <div className="div-Accordion">
                    <PrintAcordeonServicios
                        title={"Terapia ocupacional"}
                        content={`La teràpia ocupacional es una professió sòcio-sanitària que vol promoure la major autonomia, benestar i qualitat de vida en les persones, a traves de l’ocupació.`}
                        icon={
                            "https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"
                        }
                        onClick={() => toggleState(3)}
                        visible={seeContent === 3}
                    />
                </div>
                <div className="div-Accordion">
                    <PrintAcordeonServicios
                        title={"Reeducació pedagògica"}
                        content={`La Reeducació pedagògica es una professió sòcio-sanitària que vol promoure la major autonomia, benestar i qualitat de vida en les persones, a traves de l’ocupació.`}
                        icon={
                            "https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"
                        }
                        onClick={() => toggleState(4)}
                        visible={seeContent === 4}
                    />
                </div>
            </div>
            <DividerEslogan />
            <div className="div-description-services">
                <p className="p-description-services">
                    Som un centre especialitzat en <strong>Autisme</strong>. Els
                    principals serveis que oferim són la intervencio
                    psicoeducativa, teràpia ocupacional, logopèdia i reeducació
                    pedagògica.
                </p>
                <p className="p-description-services">
                    Com a professionals especialitzades en aquest camp, tractem
                    amb gran afany cada un dels serveis que oferim.
                </p>
                <p className="p-description-services">
                    Gràcies als diferents serveis amb què comptem podem exercir
                    un gran paper en el desenvolupament de les persones.
                </p>
            </div>

            {/*         <div class="wave"></div> */}
        </section>
    );
};

export default ServiciosAcordeon;
