import React, { useState } from "react";
import "./PrintAcordeonServicios.css";

const PrintAcordeonServicios = ({ title, content, icon, state, setter }) => {
    const [seeAccordion, setSeeAccordion] = useState(state);

    return (
        <>
            <figure className="figure-service-home">
                {seeAccordion === false ? (
                    <>
                        <div
                            className="div-figure-info"
                            onClick={() => setSeeAccordion(!seeAccordion)}
                        >
                            <img
                                src={icon}
                                alt="img-flecha"
                                className="img-info-figure-acordeon"
                            />
                            <h2>{title}</h2>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className="div-figure-info"
                            onClick={() => setSeeAccordion(!seeAccordion)}
                        >
                            <img
                                src={icon}
                                alt="img-flecha"
                                className="img-info-figure-acordeon-rot"
                                onClick={() => setSeeAccordion(!seeAccordion)}
                            />
                            <h2>{title}</h2>
                        </div>
                        <div className="div-figure-content">
                            <p>{content}</p>
                        </div>
                    </>
                )}
            </figure>
        </>
    );
};

export default PrintAcordeonServicios;
