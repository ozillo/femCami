import React, { useState } from "react";
import "./AcordeonTypeColor.css";
import PrintAcordeonTypeColor from "./PrintAcordeonTypeColor";

const AcordeonTypeColor = ({ optionType, arrayData }) => {
    const [isVisible, setIsVisible] = useState(null);

    const handleVisible = (index) => {
        setIsVisible((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div
            className={`div-acordeon-type-color div-acordeon-option-${optionType}`}
        >
            {arrayData &&
                arrayData.map((elem, index) => {
                    return (
                        <PrintAcordeonTypeColor
                            key={index}
                            titulo={elem.titulo}
                            contenido={elem.contenido}
                            visible={isVisible === index}
                            onClick={() => handleVisible(index)}
                            option={optionType}
                        />
                    );
                })}
        </div>
    );
};

export default AcordeonTypeColor;
