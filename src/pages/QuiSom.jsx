import React, { useEffect } from "react";
import { initialScrollTop } from "../utils/controlScroll";
import "./QuiSom.css";
import { dataTeam } from "../data/data";
import DividerMain from "../components/DividerMain/DividerMain";
import TeamCard from "../components/TeamCard/TeamCard";
import BackgroundTitle from "../components/BackgroundTitle/BackgroundTitle";


const QuiSom = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            {/* <section className="section-title-description-page">
                <h1 className="title-page">Qui Som</h1>
            </section> */}
            <BackgroundTitle title={'Qui som'} background={`background-linear`} color={`blue`}/>

            {/* <section className="section-principal-page-treballadors">
                <div className="div-page-treballadors">
                    <img
                        src={dataTeam[0].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <div className="div-description-treballadors">
                        <h1 className="h1-page-name">{dataTeam[0].name}</h1>
                        <p className="p-page-subname">{dataTeam[0].subname}</p>
                        <p className="p-page-job">{dataTeam[0].job}</p>
                    </div>

                    <div class="quote">
                        <p class="text">
                            {" "}
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
                        <p class="author">
                            {dataTeam[0].name} {dataTeam[0].subname}
                        </p>
                    </div>
                </div>

                <div className="div-page-treballadors">
                    <img
                        src={dataTeam[1].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <div className="div-description-treballadors">
                        <h1 className="h1-page-name">{dataTeam[1].name}</h1>
                        <p className="p-page-subname">{dataTeam[1].subname}</p>
                        <p className="p-page-job">{dataTeam[1].job}</p>
                    </div>

                    <div class="quote">
                        <p class="text">
                            {" "}
                            I know quite certainly that I myself have no special
                            talent; curiosity,
                            <span class="highlight">
                                obsession
                                <span class="definition-box">
                                    <span class="pronounce">
                                        [əbˈseʃ(ə)n]
                                        <i class="fas fa-volume-up"></i>
                                    </span>
                                    <span class="definition">
                                        <span class="bold">Obsession, </span> a
                                        persistent disturbing preoccupation with
                                        an often unreasonable idea or feeling.
                                    </span>
                                </span>
                            </span>{" "}
                            and dogged endurance, combined with self-criticism
                            have brought me to my ideas.
                        </p>
                        <p class="author">Albert Einstein</p>
                    </div>
                </div>
                <div className="div-page-treballadors">
                    <img
                        src={dataTeam[2].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <div className="div-description-treballadors">
                        <h1 className="h1-page-name">{dataTeam[2].name}</h1>
                        <p className="p-page-subname">{dataTeam[2].subname}</p>
                        <p className="p-page-job">{dataTeam[2].job}</p>
                    </div>
                </div>
                <div className="div-page-treballadors">
                    <img
                        src={dataTeam[3].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <div className="div-description-treballadors">
                        <h1 className="h1-page-name">{dataTeam[3].name}</h1>
                        <p className="p-page-subname">{dataTeam[3].subname}</p>
                        <p className="p-page-job">{dataTeam[3].job}</p>
                    </div>
                </div>
                <div className="div-page-treballadors">
                    <img
                        src={dataTeam[4].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <div className="div-description-treballadors">
                        <h1 className="h1-page-name">{dataTeam[4].name}</h1>
                        <p className="p-page-subname">{dataTeam[4].subname}</p>
                        <p className="p-page-job">{dataTeam[4].job}</p>
                    </div>
                </div>
                <div className="div-page-treballadors">
                    <img
                        src={dataTeam[5].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <div className="div-description-treballadors">
                        <h1 className="h1-page-name">{dataTeam[5].name}</h1>
                        <p className="p-page-subname">{dataTeam[5].subname}</p>
                        <p className="p-page-job">{dataTeam[5].job}</p>
                    </div>
                </div>
                <div className="div-page-treballadors">
                    <img
                        src={dataTeam[6].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <div className="div-description-treballadors">
                        <h1 className="h1-page-name">{dataTeam[6].name}</h1>
                        <p className="p-page-subname">{dataTeam[6].subname}</p>
                        <p className="p-page-job">{dataTeam[6].job}</p>
                    </div>
                </div>
                <div className="div-page-treballadors">
                    <img
                        src={dataTeam[7].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <div className="div-description-treballadors">
                        <h1 className="h1-page-name">{dataTeam[7].name}</h1>
                        <p className="p-page-subname">{dataTeam[7].subname}</p>
                        <p className="p-page-job">{dataTeam[7].job}</p>
                    </div>
                </div>
                <div className="div-page-treballadors">
                    <img
                        src={dataTeam[8].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <div className="div-description-treballadors">
                        <h1 className="h1-page-name">{dataTeam[8].name}</h1>
                        <p className="p-page-subname">{dataTeam[8].subname}</p>
                        <p className="p-page-job">{dataTeam[8].job}</p>
                    </div>
                </div>
            </section> */}
            <section className="section-description-qui-som">
                <p>
                    FEM CAMÍ està integrat per un{" "}
                    <strong>EQUIP TRANSDISCIPLINAR</strong>, on totes compartim,
                    treballem, cooperem cap un mateix objectiu, reforçant la
                    feina en cada disciplina de forma transversal.
                </p>
                
                {/* <img src={dataTeam[0].photo} alt="photoTeam" className="imgWork" /> */}
            </section>
            <DividerMain />
            <TeamCard />
        </>
    );
};

export default QuiSom;
