import { dataTeam } from "../../data/data";
import "./TeamCard.css";

import React from "react";

const TeamCard = () => {
    return (
        <>
            {dataTeam &&
                dataTeam.map((elem, index) => {
                    return (
                        <section className="section-all-cards" key={index}>
                            <div class="div-card-photo">
                                <div class="imgBx">
                                    <img
                                        src={elem.img}
                                        alt="iconTreballadors"
                                        className="img-page-treballadors"
                                    />
                                </div>
                                <div className="details">
                                    <span>{elem.job}</span>
                                </div>
                            </div>
                            <div className="div-card-information">
                                <h3 className="h3-card-information-name">
                                    {`${elem.name} ${elem.subname}`}
                                </h3>
                                <div className="quote">
                                    <p className="text">{elem.description}</p>
                                </div>
                                {/* <div class="quote">
                                    <p class="text">
                                        {elem.mention}
                                        <span class="highlight">
                                            {elem.highlight}
                                            <span class="definition-box">
                                                <span class="pronounce">
                                                    {elem.pronounce}
                                                    <i class="fas fa-volume-up"></i>
                                                </span>
                                                <span class="definition">
                                                    <span class="bold">
                                                        {elem.bold},{" "}
                                                    </span>
                                                    {elem.definition}
                                                </span>
                                            </span>
                                        </span>
                                        {elem.postmention}.
                                    </p>
                                </div> */}
                                <p className="p-card-information-centre-femcami">
                                    Fem Camí
                                </p>
                            </div>
                        </section>
                    );
                })}
            {/* <section className="section-all-cards">
                <div class="div-card-photo">
                    <div class="imgBx">
                        <img
                            src={dataTeam[0].img}
                            alt="iconTreballadors"
                            className="img-page-treballadors"
                        />
                    </div>
                    <div className="details">
                        <span>{dataTeam[0].job}</span>
                    </div>
                </div>
                <div className="div-card-information">
                    <h3 className="h3-card-information-name">
                        {`${dataTeam[0].name} ${dataTeam[0].subname}`}
                    </h3>
                    <div class="quote">
                        <p class="text">
                            {dataTeam[0].mention}
                            <span class="highlight">
                                {dataTeam[0].highlight}
                                <span class="definition-box">
                                    <span class="pronounce">
                                        {dataTeam[0].pronounce}
                                        <i class="fas fa-volume-up"></i>
                                    </span>
                                    <span class="definition">
                                        <span class="bold">
                                            {dataTeam[0].bold},{" "}
                                        </span>
                                        {dataTeam[0].definition}
                                    </span>
                                </span>
                            </span>
                            {dataTeam[0].postmention}.
                        </p>
                    </div>
                    <p className="p-card-information-centre-femcami">
                        Fem Camí
                    </p>
                </div>
            </section> */}
        </>
    );
};

export default TeamCard;
