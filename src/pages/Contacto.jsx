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
                    <img
                        src="https://res.cloudinary.com/dtfugozix/image/upload/v1707307244/Fem%20Cami/Icon/iconmonstr-instagram-13-64_b87kji.png"
                        alt="instagram"
                        className="logo-social-contacte"
                    />
                    <img
                        src="https://res.cloudinary.com/dtfugozix/image/upload/v1707303816/Fem%20Cami/Icon/iconmonstr-facebook-3-64_1_qdzzno.png"
                        alt="facebook"
                        className="logo-social-contacte"
                    />
                    <img
                        src="https://res.cloudinary.com/dtfugozix/image/upload/v1707303816/Fem%20Cami/Icon/iconmonstr-youtube-6-64_zb9kmq.png"
                        alt="youtube"
                        className="logo-social-contacte"
                    />
                </div>
            </section>
            <section className="section-contacte-ubication-map">
                <div class="center">
                    <input type="checkbox" name="flipped" id="flipped" />
                    {/* <svg class="land" viewBox="0 0 100 100">
                        <path d="M0,100 L0,70 Q35,40 25,30 Q21,21 35,17 C45,35 55,0 65,15 Q70,20 80,10 Q90,5 100,14 L100,45 L90,55 Q88,80 70,80 L67,75 Q68,55 50,75 Q45,85 47,80 Q49,95 35,100 Z" />
                    </svg> */}
                    <label class="landmark-symbol" for="flipped">
                        <svg class="landmark" viewBox="0 0 120 200">
                            <path d="M58,200 L5,105 A 60 60 0 1 1 115 105 L62,200 Z" />
                            <circle cx="60" cy="80" r="23" />
                        </svg>
                        <div class="shadow"></div>
                    </label>
                    <label class="landmark-details" for="flipped">
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1707489509/Fem%20Cami/Background/Captura_de_pantalla_2024-02-09_a_las_15.38.03_vpydxw.png"
                            alt="landmark-photo"
                        />
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
                {/* <div className="link-mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6009674137167!2d1.693868126581495!3d41.3392895989765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a47a2760bc3ecf%3A0xe41446028836b110!2zRmVtIENhbcOt!5e0!3m2!1ses!2ses!4v1707525921745!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
            </section>
            <section className="section-contacte-ubication-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6395295783273!2d1.6966529!3d41.3384512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a47992a1c98405%3A0xc158007af0fd0bd8!2sCarrer%20de%20l&#39;Alguer%2C%2016%2C%2008720%20Vilafranca%20del%20Pened%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1707558869522!5m2!1ses!2ses"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
            <section className="section-contacte-formulario"></section>
        </>
    );
};

export default Contacto;
