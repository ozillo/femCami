import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Contacto.css";
import { initialScrollTop } from "../utils/controlScroll";

const Contacto = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <section className="section-contacte-general-info">
              <div className="div-contacte-adress">
              <h1>Carrer de l'Alguer </h1>
                <p>Vilafranca del Penedès</p>
                <p>08720</p>
                <p>Barcelona</p>
              </div>
              <div className="div-contacte-social">
              <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1707307244/Fem%20Cami/Icon/iconmonstr-instagram-13-64_b87kji.png" 
              alt="instagram" 
              className="logo-social-contacte"
              />
              <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1707303816/Fem%20Cami/Icon/iconmonstr-facebook-3-64_1_qdzzno.png" 
              alt="facebook" 
              className="logo-social-contacte"
              />
              <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1707303816/Fem%20Cami/Icon/iconmonstr-youtube-6-64_zb9kmq.png" 
              alt="youtube" 
              className="logo-social-contacte"
              />
              </div>

              
                

            </section>
        <section className="section-contacte-ubication-map">  
        <div class="center">
          <input type="checkbox" name="flipped" id="flipped"/>
          <svg class="land" viewBox="0 0 100 100">
            <path d="M0,100 L0,70 Q35,40 25,30 Q21,21 35,17 C45,35 55,0 65,15 Q70,20 80,10 Q90,5 100,14 L100,45 L90,55 Q88,80 70,80 L67,75 Q68,55 50,75 Q45,85 47,80 Q49,95 35,100 Z" />
          </svg>
          <label class="landmark-symbol" for="flipped">
            <svg class="landmark" viewBox="0 0 120 200">
              <path d="M58,200 L5,105 A 60 60 0 1 1 115 105 L62,200 Z" />
              <circle cx="60" cy="80" r="23" /> 
            </svg>
            <div class="shadow"></div>
          </label>
          <label class="landmark-details" for="flipped">
            <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1707489509/Fem%20Cami/Background/Captura_de_pantalla_2024-02-09_a_las_15.38.03_vpydxw.png" alt="landmark-photo"/>
            <div class="address">
              <h5>Centre Fem Cami</h5>
              <p>C/Alguer nº24</p>
              <p>08720 Vilafranca del Penedès</p>
            </div>
            <div class="btn-group">
              <a>Com arribar</a>
              <a>Veure</a>
            </div>
          </label>
        </div>
        </section>
            <section className="section-contacte-formulario"></section>
        </>
    );
};

export default Contacto;
