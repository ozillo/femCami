import React, { useEffect, useRef, useState } from "react";
import "./AcordeonTypeColor.css";
const PrintAcordeonTypeColor = ({ titulo, contenido, visible, onClick }) => {
    const contentHeight = useRef();
    const handleIndex = (indice) => {
        setIsVisible((prevIndex) => (prevIndex === indice ? null : indice));
    };

    return (
        <div className={`div-wrapper-acordeon${visible ? "-open" : ""}`}>
            <div
                className={`div-acordeon-question${visible ? "-open" : ""}`}
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
                        : { height: "0px" }
                }
            >
                <p>{contenido}</p>
            </div>
        </div>
    );
};

export default PrintAcordeonTypeColor;
