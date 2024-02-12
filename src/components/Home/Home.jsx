import { initialScrollTop } from "../../utils/controlScroll";
import Description from "../Description/Description";
import DividerMain from "../DividerMain/DividerMain";
import Services from "../Services/Services";
import ServiciosAcordeon from "../Services/ServiciosAcordeon";
import ServiciosAutismo from "../Services/ServiciosAutismo";
import SliderBanner from "../SliderBanner/SliderBanner";
import Team from "../Team/Team";
import "./Home.css";
import React, { useEffect } from "react";

const Home = () => {
    const controlScroll = () => {
        const sections = document.querySelectorAll(
            ".section-initial-transition",
        );
        const scrollTop = document.documentElement.scrollTop;

        console.log({ sections });
        sections.forEach((elem, index) => {
            let altura = sections[index].offsetTop;
            if (altura - 500 < scrollTop) {
                sections[index].style.opacity = 1;
            } else {
                sections[index].style.opacity = 0;
            }
        });
    };
    window.addEventListener("scroll", controlScroll);
    useEffect(() => {
        controlScroll();
    }, []);
    useEffect(() => {
        initialScrollTop();
    }, []);

    return (
        <>
            <Description />

            <section className="section-initial-transition">
                <SliderBanner />
            </section>

            <div className="div-title-home title-home-serveis">
                <p className="p-title-home-serveis">Els nostres serveis</p>
                <div></div>
            </div>
            <section className="section-initial-transition">
                <ServiciosAcordeon />
            </section>

            <div className="div-title-home title-home-equip">
                <p className="p-title-home-equip">El nostre equip</p>
                <div></div>
            </div>
            <section className="section-initial-transition">
                <Team />
            </section>

            <div className="div-title-home title-home-autisme">
                <p className="p-title-home-autisme">Autisme</p>
                <div></div>
            </div>
            <section className="section-initial-transition">
                <ServiciosAutismo />
            </section>
        </>
    );
};

export default Home;
