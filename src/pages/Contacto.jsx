import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";

const Contacto = () => {
    return (
        <>
            <BannerTitulo />
            <AcordeonTypeColor optionType={"blue"} />
            <AcordeonTypeColor optionType={"orange"} />
            <AcordeonTypeColor optionType={"green"} />
        </>
    );
};

export default Contacto;
