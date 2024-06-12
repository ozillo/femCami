import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { initialScrollTop } from "../utils/controlScroll";



const Autismo = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return <Outlet />;
};

export default Autismo;
