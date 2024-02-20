import React, { useEffect } from "react";
import { initialScrollTop } from "../utils/controlScroll";
import "./QuiSom.css";
import { dataTeam } from "../data/data";
import DividerMain from "../components/DividerMain/DividerMain";
import TeamCard from "../components/TeamCard/TeamCard";

const QuiSom = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <section className="section-title-description-page">
                <h1 className="title-page">Qui Som</h1>
            </section>

            <TeamCard />
        </>
    );
};

export default QuiSom;
