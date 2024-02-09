import React, { useEffect } from "react";
import { initialScrollTop } from "../utils/controlScroll";
import "./Autismo.css"
import { dataTeam } from "../data/data";
import DividerMain from "../components/DividerMain/DividerMain";




const QuiSom = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return(
      <>
 <section className="section-title-description-page">
    <h1>Qui Som</h1>
 </section>
 <DividerMain/>
 <section className="section-principal-page-description-acordeon">
                <div className="div-page-treballadors">
                <img
                        src={dataTeam[0].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <h1 className="h1-page-name">{dataTeam[0].name}</h1>
                    <p className="p-page-subname">
                        {dataTeam[0].subname}
                    </p>
                    <p className="p-page-job">
                        {dataTeam[0].job}
                    </p>

                    </div>
                    <div className="div-page-treballadors">
                <img
                        src={dataTeam[1].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <h1 className="h1-page-name">{dataTeam[1].name}</h1>
                    <p className="p-page-subname">
                        {dataTeam[1].subname}
                    </p>
                    <p className="p-page-job">
                        {dataTeam[1].job}
                    </p>
                    </div>
                    <div className="div-page-treballadors">
                <img
                        src={dataTeam[2].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <h1 className="h1-page-name">{dataTeam[2].name}</h1>
                    <p className="p-page-subname">
                        {dataTeam[2].subname}
                    </p>
                    <p className="p-page-job">
                        {dataTeam[2].job}
                    </p>
                    </div>
                    <div className="div-page-treballadors">
                <img
                        src={dataTeam[3].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <h1 className="h1-page-name">{dataTeam[3].name}</h1>
                    <p className="p-page-subname">
                        {dataTeam[3].subname}
                    </p>
                    <p className="p-page-job">
                        {dataTeam[3].job}
                    </p>
                    </div>
                    <div className="div-page-treballadors">
                <img
                        src={dataTeam[4].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <h1 className="h1-page-name">{dataTeam[4].name}</h1>
                    <p className="p-page-subname">
                        {dataTeam[4].subname}
                    </p>
                    <p className="p-page-job">
                        {dataTeam[4].job}
                    </p>
                    </div>
                    <div className="div-page-treballadors">
                <img
                        src={dataTeam[5].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <h1 className="h1-page-name">{dataTeam[5].name}</h1>
                    <p className="p-page-subname">
                        {dataTeam[5].subname}
                    </p>
                    <p className="p-page-job">
                        {dataTeam[5].job}
                    </p>
                    </div>
                    <div className="div-page-treballadors">
                <img
                        src={dataTeam[6].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <h1 className="h1-page-name">{dataTeam[6].name}</h1>
                    <p className="p-page-subname">
                        {dataTeam[6].subname}
                    </p>
                    <p className="p-page-job">
                        {dataTeam[6].job}
                    </p>
                    </div>
                    <div className="div-page-treballadors">
                <img
                        src={dataTeam[7].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <h1 className="h1-page-name">{dataTeam[7].name}</h1>
                    <p className="p-page-subname">
                        {dataTeam[7].subname}
                    </p>
                    <p className="p-page-job">
                        {dataTeam[7].job}
                    </p>
                    </div>
                    <div className="div-page-treballadors">
                <img
                        src={dataTeam[8].img}
                        alt="iconTreballadors"
                        className="img-page-treballadors"
                    />
                    <h1 className="h1-page-name">{dataTeam[8].name}</h1>
                    <p className="p-page-subname">
                        {dataTeam[8].subname}
                    </p>
                    <p className="p-page-job">
                        {dataTeam[8].job}
                    </p>

                    </div>
</section>


  

    </>
    ) 
};

export default QuiSom;
