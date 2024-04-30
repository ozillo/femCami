import React, { useState } from "react";
import "./PrintServicioAutismo.css";
import { useNavigate } from "react-router-dom";

const PrintServicioAutismo = ({ icon, title, content, linkTo }) => {
    const navigate = useNavigate();
    return (
        <div className="div-section-autismo">
            <img src={icon} className="img-service-autismo" alt="img-icon" />
            <h3>{title}</h3>
            <p>{content}</p>
            <button
                className="btn-section-autismo"
                onClick={() => navigate(linkTo)}
            >
                SABER MES
            </button>
        </div>
    );
};

export default PrintServicioAutismo;
