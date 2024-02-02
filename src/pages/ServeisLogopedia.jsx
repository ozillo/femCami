import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import { arrayLogopedia } from "../data/arrayServeis";

const ServeisLogopedia = () => {
    return (
        <>
            <BannerTitulo />
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <h2>Logopedia</h2>
                    <p>{arrayLogopedia[0].mainDescription}</p>
                </div>
                <div className="div-page-main-acordeon">
                    <AcordeonTypeColor
                        optionType={"green"}
                        arrayData={arrayLogopedia[0].content}
                    />
                </div>
            </section>
        </>
    );
};

export default ServeisLogopedia;
