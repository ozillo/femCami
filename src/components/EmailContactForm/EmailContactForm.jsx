import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form);
        const serviceID = "default_service";
        const templateID = "template_7pww4wm";
        const publicKey = "O7l1pK7eYZIuhqPHs";
        emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                },
            );
    };

    return (
        <div className="div-contact-form-wrapper">
            <form
                ref={form}
                onSubmit={sendEmail}
                id="form"
                className="main-form-contacte"
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

export default EmailContactForm;
