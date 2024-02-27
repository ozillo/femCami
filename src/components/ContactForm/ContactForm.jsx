import React, { useEffect, useState } from "react";
import "./ContactForm.css";
const ContactForm = () => {
    /*  const sendEmailAnchor = document.querySelector("#sendEmailA");
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        mensaje: "",
    });
    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(formValues);
        sendEmailAnchor.click();
        console.log("he hecho click");
    };
    const handleChange = (ev) => {
        console.log({ ev });
        const { target } = ev;
        const { name, value } = target;
        const newValues = { ...formValues, [name]: value };
        setFormValues(newValues);
    }; */
    const handleSubmit = (event) => {
        const btn = document.getElementById("button");
        event.preventDefault();

        btn.value = "Sending...";

        const serviceID = "default_service";
        const templateID = "template_7pww4wm";

        emailjs.sendForm(serviceID, templateID, this).then(
            () => {
                btn.value = "Send Email";
                alert("Sent!");
            },
            (err) => {
                btn.value = "Send Email";
                alert(JSON.stringify(err));
            },
        );
    };
    /*  const setFunctionSubmit = () => {
        const btn = document.getElementById("button");

        document
            .getElementById("form")
            .addEventListener("submit", function (event) {
                event.preventDefault();

                btn.value = "Sending...";

                const serviceID = "default_service";
                const templateID = "template_7pww4wm";

                emailjs.sendForm(serviceID, templateID, this).then(
                    () => {
                        btn.value = "Send Email";
                        alert("Sent!");
                    },
                    (err) => {
                        btn.value = "Send Email";
                        alert(JSON.stringify(err));
                    },
                );
            });
    }; */
    return (
        <div className="div-contact-form-wrapper">
            {/* <form
                onSubmit={handleSubmit}
                id="form-contacte"
                className="main-form-contacte"
            >
                <label htmlFor="name" className="label-form-column">
                    Nom
                    <input
                        type="text"
                        name="name"
                        id=""
                        className="input-form"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="email" className="label-form-column">
                    e-mail
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-form"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="mensaje" className="label-form-column">
                    Missatge
                    <textarea
                        type="text"
                        name="mensaje"
                        id="mensaje"
                        className="textarea-form"
                        value={formValues.mensaje}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <a
                    id="sendEmailA"
                    href="mailto:94samuel14@gmail.com?subject=hola"
                />

                <button
                    id="btn-form-contacte"
                    className="btn-form"
                    type="submit"
                >
                    Enviar!
                </button>
            </form> */}
            <form
                id="form"
                className="main-form-contacte"
                onSubmit={handleSubmit}
            >
                <div className="field">
                    <label
                        htmlFor="emailjs_email"
                        className="label-form-column"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        name="emailjs_email"
                        id="emailjs_email"
                        className="input-form"
                    />
                </div>
                <div className="field">
                    <label htmlFor="emailjs_name" className="label-form-column">
                        Nom
                    </label>
                    <input
                        type="text"
                        name="emailjs_name"
                        id="emailjs_name"
                        className="input-form"
                    />
                </div>
                <div className="field">
                    <label
                        htmlFor="emailjs_message"
                        className="label-form-column"
                    >
                        Missatge
                    </label>
                    <textarea
                        type="text"
                        name="emailjs_message"
                        id="emailjs_message"
                        className="textarea-form"
                    />
                </div>

                <input
                    type="submit"
                    id="button"
                    value="Send Email"
                    className="btn-form"
                />
            </form>
        </div>
    );
};

export default ContactForm;
