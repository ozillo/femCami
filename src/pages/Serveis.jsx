import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { initialScrollTop } from "../utils/controlScroll";

const Serveis = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return <Outlet />;
};

export default Serveis;
