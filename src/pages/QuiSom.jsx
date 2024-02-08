<<<<<<< HEAD
import React from 'react'
import BannerTitulo from '../components/BannerTitulo/BannerTitulo'
import Team from '../components/Team/Team'

const QuiSom = () => {
  return (
    <>
    <BannerTitulo/>
    <Team/>
    </>
    
  )
}
=======
import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import { initialScrollTop } from "../utils/controlScroll";

const QuiSom = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return <BannerTitulo />;
};
>>>>>>> 8347caf9764bdb1fea257fcec27fdd3ff3b99987

export default QuiSom;
