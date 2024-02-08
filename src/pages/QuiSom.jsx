import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import { initialScrollTop } from "../utils/controlScroll";

const QuiSom = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return <BannerTitulo />;
};

export default QuiSom;
