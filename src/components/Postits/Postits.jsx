import React, { useState } from "react"
import "./Postits.css"
import PrintPostits from "./PrintPostits";

const Postits = ({ optionType, arrayData }) => {
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
                        <PrintPostits
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

export default Postits;
