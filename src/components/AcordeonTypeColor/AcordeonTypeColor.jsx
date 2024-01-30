import React, { useState } from "react";
import "./AcordeonTypeColor.css";

const AcordeonTypeColor = () => {
    const [isVisible, setIsVisible] = useState(null);
    const newArray = [
        {
            titulo: "seccion1",
            contenido:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores sunt perferendis hic reiciendis, eaque, assumenda, dolor atque aperiam laudantium delectus aspernatur eum error odit dolore illum eveniet. Delectus, laudantium!",
        },
        {
            titulo: "seccion2",
            contenido:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores sunt perferendis hic reiciendis, eaque, assumenda, dolor atque aperiam laudantium delectus aspernatur eum error odit dolore illum eveniet. Delectus, laudantium!",
        },
        {
            titulo: "seccion2",
            contenido:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores sunt perferendis hic reiciendis, eaque, assumenda, dolor atque aperiam laudantium delectus aspernatur eum error odit dolore illum eveniet. Delectus, laudantium!",
        },
        {
            titulo: "seccion1",
            contenido:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores sunt perferendis hic reiciendis, eaque, assumenda, dolor atque aperiam laudantium delectus aspernatur eum error odit dolore illum eveniet. Delectus, laudantium!",
        },
        {
            titulo: "seccion2",
            contenido:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores sunt perferendis hic reiciendis, eaque, assumenda, dolor atque aperiam laudantium delectus aspernatur eum error odit dolore illum eveniet. Delectus, laudantium!",
        },
        {
            titulo: "seccion2",
            contenido:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores sunt perferendis hic reiciendis, eaque, assumenda, dolor atque aperiam laudantium delectus aspernatur eum error odit dolore illum eveniet. Delectus, laudantium!",
        },
    ];
    const handleVisible = (index) => {
        setIsVisible((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className="div-acordeon-type-color">
            {newArray.map((elem, index) => {
                return (
                    <PrintAcordeonTypeColor
                        key={index}
                        titulo={elem.titulo}
                        contenido={elem.contenido}
                        visible={isVisible === index}
                        onClick={() => handleVisible(index)}
                    />
                );
            })}
        </div>
    );
};
import "./AcordeonTypeColor.css";
import PrintAcordeonTypeColor from "./PrintAcordeonTypeColor";
export default AcordeonTypeColor;
