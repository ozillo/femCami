import Description from "../Description/Description";
import DividerMain from "../DividerMain/DividerMain";
import Services from "../Services/Services";
import ServiciosAcordeon from "../Services/ServiciosAcordeon";
import ServiciosAutismo from "../Services/ServiciosAutismo";
import SliderBanner from "../SliderBanner/SliderBanner";
import Team from "../Team/Team";
import "./Home.css";
import React from "react";




const Home = () => {
    return (
        <>
            <Description />

            <div className="div-title-home title-home-serveis">
                <p className="p-title-home-serveis">Els nostres serveis</p>
                <div></div>
            </div>
            <SliderBanner/>
            <ServiciosAcordeon />
            
            
            <div className="div-title-home title-home-equip">
                <p className="p-title-home-equip">El nostre equip</p>
                <div></div>
            </div>
            <Team />
            <div className="div-title-home title-home-autisme">
                <p className="p-title-home-autisme">Autisme</p>
                <div></div>
            </div>
            <ServiciosAutismo />
        </>
    );
};

export default Home;
