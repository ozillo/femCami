import "./Description.css";

import React, { useState } from "react";
import NewDescription from "./NewDescription";
import DividerMain from "../DividerMain/DividerMain";

const Description = () => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <>
            <div className="div-background-img"></div>
            <img
                src="https://res.cloudinary.com/dtfugozix/image/upload/v1702028834/Fem%20Cami/Logo/logoFemCami_eqfgop.png"
                alt=""
                className="imgDescription"
            />
            <DividerMain />
            <section className="section-initial-transition">
                <NewDescription />
            </section>

            {/* <section className="description-section"> 
          <h1>Centre D’Intervenció Educativa</h1>
          <p>Fem Camí és un centre d’intervenció educativa amb professionals de l’educació, amb un treball multidisciplinar i una línia metodologica on es basa en aprenentatges funcionals i adaptatius, habilitats personals, socials i d’autonomia, on es prioritza al major treball en entorn natural o un enfoc i un espai molt semblant el que es troben dia a dia, un espai obert.</p>
          <button 
          onClick={()=>setShowInfo(true)}
          className="btn-mes-info">Més informació</button>
      </section>
      {
        showInfo==true &&
        <section className="mes-info-section">
        <p>Fem Camí és un centre d’intervenció psicoeducativa que dóna resposta a les persones amb diversitat funcional i dificultats d’aprenentatge.</p>
        <p>Som un centre on duem a terme intervencions específiques en autisme, on som referència dins de la nostra comarca.</p>
        <p>La nostra línia pedagògica i metodològica és poder treballar diferents àrees del desenvolupament i millorar les diferents habilitats en entorn natural, la major intervenció possible. Creiem que la millor manera de poder avançar amb el seu desenvolupament i aprenentatge és al dia a dia. Per tant, treballem conjuntament amb la família, entorns naturals, on el treball que es dur al centre es veu diferenciat. Trobareu una petita escola on aprenem jugant, compartint el nostre dia amb altres nens i professionals.</p>
        <p>Seguint aquesta línia ens basem en una intervenció conjunta amb la família i l’escola. Els nostres objectius són acompanyar i guiar a la família per poder avançar i millorar la qualitat de vida de l’infant.</p>
        <p>CIE FEM CAMÍ, promou i lluita per la inclusió i els drets de les persones amb diversitat funcional, col·laborant i intervenint en diferents àmbits i entorns, tant a l’escola, activitats esportives, de lleure, i activitats del mateix poble.</p>
        <button 
          onClick={()=>setShowInfo(false)}
          className="btn-mes-info">Amagar info</button>
      </section>
      } */}
        </>
    );
};

export default Description;
