import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Contacto.css";
import { initialScrollTop } from "../utils/controlScroll";
import ContactForm from "../components/ContactForm/ContactForm";
import DividerMain from "../components/DividerMain/DividerMain";
import { useNavigate } from "react-router-dom";
import EmailContactForm from "../components/EmailContactForm/EmailContactForm";

const Contacto = () => {
    const navigate = useNavigate();
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <section className="section-contacte-general-info">
                {/* <img
                    src="https://res.cloudinary.com/dtfugozix/image/upload/v1707897610/Fem%20Cami/Contacto/Pngtree_watercolor_flowers_3391392_swed1b.png"
                    alt="image watercolor flowers"
                    className="section-contacte-img-flower contacte-img-invert"
                /> */}
                <img
                    src="https://res.cloudinary.com/dtfugozix/image/upload/v1708020771/Fem%20Cami/Contacto/Pngtree_contact_our_front_desk_5412876_ddv53c.png"
                    alt="image watercolor flowers"
                    className="section-contacte-img-flower"
                />
                <h1 className="section-contacte-h1">On pots trobar-nos?</h1>
                <div className="section-contacte-div-general-info">
                    <h3>ADREÇA:</h3>
                    <p>Carrer de l'Alguer, 16</p>
                    <p>Vilafranca del Penedès</p>
                    <p>08720</p>
                    <p>Barcelona</p>
                </div>
                <div className="section-contacte-div-general-info">
                    <h3>TELÈFON:</h3>
                    <p>+34 789 098 399</p>
                </div>
                <div className="section-contacte-div-general-info">
                    <h3>E-MAIL:</h3>
                    <p>infofemcami@gmail.com</p>
                </div>
                <div className="div-contacte-social">
                    <div
                        className="div-contacte-social-wrapper"
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/centrefemcami/",
                                "rel=noopener noreferrer",
                            )
                        }
                    >
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708022408/Fem%20Cami/Icon/instagram_vqzg7a.png"
                            alt="logo instagram"
                            className="logo-social-contacte"
                        />
                        <p className="p-contacte-social-display">
                            /centrefemcami
                        </p>
                    </div>
                    <div
                        className="div-contacte-social-wrapper"
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/centrefemcami/",
                                "rel=noopener noreferrer",
                            )
                        }
                    >
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708022689/Fem%20Cami/Icon/facebook_wjbt5x.png"
                            alt="logo facebook"
                            className="logo-social-contacte"
                        />
                        <p className="p-contacte-social-display">
                            /centrefemcami
                        </p>
                    </div>
                    <div
                        className="div-contacte-social-wrapper"
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/centrefemcami/",
                                "rel=noopener noreferrer",
                            )
                        }
                    >
                        <img
                            src="https://res.cloudinary.com/dtfugozix/image/upload/v1708022692/Fem%20Cami/Icon/youtube_ojamsr.png"
                            alt="logo youtube"
                            className="logo-social-contacte"
                        />
                        <p className="p-contacte-social-display">
                            centre fem cami
                        </p>
                    </div>
                </div>
            </section>
            <section className="section-contacte-formulario">
                <div className="div-contact-message-form">
                    <h2 className="h2-contact-message-form">
                        Pots enviar el teu missatge!
                    </h2>
                    <p>
                        No dubtis en contactar-nos davant qualsevol dubte que
                        puguis tenir. Et respondrem tan aviat com podem!
                    </p>
                    <img
                        src="https://res.cloudinary.com/dtfugozix/image/upload/v1702038387/Fem%20Cami/Logo/logoHeader_hp4uov.png"
                        alt="logo fem cami formulario"
                        className="img-contact-message-form"
                    />
                </div>
                {/* <ContactForm /> */}
                <EmailContactForm />
            </section>
            <DividerMain />
            <section className="section-contacte-ubication-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6395295783273!2d1.6966529!3d41.3384512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a47992a1c98405%3A0xc158007af0fd0bd8!2sCarrer%20de%20l&#39;Alguer%2C%2016%2C%2008720%20Vilafranca%20del%20Pened%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1707558869522!5m2!1ses!2ses"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </>
    );
};

export default Contacto;
{
    /* <section className="section-contacte-ubication-map">
                <div class="center">
                    <input type="checkbox" name="flipped" id="flipped" />
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
             <div className="link-mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6009674137167!2d1.693868126581495!3d41.3392895989765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a47a2760bc3ecf%3A0xe41446028836b110!2zRmVtIENhbcOt!5e0!3m2!1ses!2ses!4v1707525921745!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> 
            </section> */
}
