import { useState } from "react";
import React from 'react'
import PrintServicioAutismo from "../PrintServicio/PrintServicioAutismo";
import "./ServiciosAutismo.css"


const ServiciosAutismo = () => {
  return (
    <>
    <section className="section-home-autismo">
      <div className="div-info-autismo">
      <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1706571775/Fem%20Cami/BANNER/SOMCENTRE2_neispz.png" 
      alt="bannerAutismo"
      className="bannerAutismo" />
      </div>
      <div className="div-all-servicesAutismo">
      <div className="div-service-autismo">
      <PrintServicioAutismo
         icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1706486965/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/iconGlassesOrange_wcqdtr.png"}
         title={"Intervenció Psicoeducativa"}
         content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi autem expedita accusantium sapiente tenetur labore aperiam dolorem numquam harum. Eligendi, tempore asperiores ducimus esse impedit fugit aut. Totam, saepe nisi!"}
        />
      </div>
      <div className="div-service-autismo">
      <PrintServicioAutismo
        icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1706489131/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/iconBooksBlue_iw8i5a.png"}
        title={"Programa d'activitats socials"}
        content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi autem expedita accusantium sapiente tenetur labore aperiam dolorem numquam harum. Eligendi, tempore asperiores ducimus esse impedit fugit aut. Totam, saepe nisi!"}
        
        />
      </div>
      <div className="div-service-autismo">
      <PrintServicioAutismo
        icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1706489429/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/iconBoxGreen_xb3ibo.png"}
        title={"Centre de recursos d'autisme CRAPG"}
        content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi autem expedita accusantium sapiente tenetur labore aperiam dolorem numquam harum. Eligendi, tempore asperiores ducimus esse impedit fugit aut. Totam, saepe nisi!"}
        />
      </div>
      </div>
      
    </section>
    </>
  )
}

export default ServiciosAutismo