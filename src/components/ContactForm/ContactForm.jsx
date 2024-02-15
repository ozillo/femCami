import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
    const onSubmit = () => {};
    return (
        <div className="div-contact-form-wrapper">
            <form action={onSubmit} className="main-form-contacte">
                <label htmlFor="nombre" className="label-form-column">
                    Nombre
                    <input
                        type="text"
                        name="nombre"
                        id=""
                        className="input-form"
                    />
                </label>
                <label htmlFor="e-mail" className="label-form-column">
                    e-mail
                    <input
                        type="email"
                        name="e-mail"
                        id="e-mail"
                        className="input-form"
                    />
                </label>
                <label htmlFor="mensaje" className="label-form-column">
                    Mensaje
                    <textarea
                        type="text"
                        name="mensaje"
                        id="mensaje"
                        className="textarea-form"
                    ></textarea>
                </label>
                <button className="btn-form">Enviar!</button>
            </form>
        </div>
    );
};

export default ContactForm;
