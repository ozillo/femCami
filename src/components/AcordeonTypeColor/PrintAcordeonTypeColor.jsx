import React, { useEffect, useRef, useState } from "react";
import "./AcordeonTypeColor.css";
const PrintAcordeonTypeColor = ({
    titulo,
    contenido,
    visible,
    onClick,
    option,
}) => {
    const contentHeight = useRef();
    const handleIndex = (indice) => {
        setIsVisible((prevIndex) => (prevIndex === indice ? null : indice));
    };

    return (
        <div
            className={`div-wrapper-acordeon${visible ? `-open div-wrapper-option-${option}` : ""}`}
        >
            <div
                className={`div-acordeon-question${visible ? `-open` : ""} div-acordeon-question-option-${option}`}
                onClick={onClick}
            >
                <h3>{titulo}</h3>
            </div>
            <div
                ref={contentHeight}
                className="div-acordeon-content"
                style={
                    visible
                        ? {
                              height: contentHeight.current.scrollHeight,
                              margin: "20px 0",
                          }
                        : { height: "0px", color: "transparent" }
                }
            >
                {contenido.length === 1 ? (
                    <p>{contenido}</p>
                ) : (
                    contenido.map((elem, index) => <p>· {elem}</p>)
                )}
            </div>
        </div>
    );
};

export default PrintAcordeonTypeColor;
