import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";

const Contacto = () => {
    return (
        <>
        <h1>Contacte</h1>
       
            <AcordeonTypeColor optionType={"blue"} />
            <AcordeonTypeColor optionType={"orange"} />
            <AcordeonTypeColor optionType={"green"} />
        </>
    );
};

export default Contacto;
