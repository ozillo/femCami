import React, { useEffect, useState } from "react";
import "./PrintAcordeonServicios.css";

const PrintAcordeonServicios = ({ title, content, icon, onClick, visible }) => {
    const [seeAccordion, setSeeAccordion] = useState(null);

    /*     const toggleState = (newState) => {
        setSeeAccordion(seeAccordion === null ? newState : null);
    }; */
    return (
        <>
            <figure className="figure-service-home">
                {visible ? (
                    <>
                        <div className="div-figure-info" onClick={onClick}>
                            <img
                                src="https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"
                                alt="img-flecha"
                                className="img-info-figure-acordeon-rot"
                                onClick={onClick}
                            />
                            <h2>{title}</h2>
                        </div>
                        <div className="div-figure-content">
                            <p>{content}</p>
                        </div>
                    </>
                ) : (
                    <div className="div-figure-info" onClick={onClick}>
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"
                            alt="img-flecha"
                            className="img-info-figure-acordeon"
                        />
                        <h2>{title}</h2>
                    </div>
                )}
            </figure>
        </>
    );
    {
        /* <>
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
        </> */
    }
};

export default PrintAcordeonServicios;
