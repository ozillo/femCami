import { useState } from "react";
import React from 'react'
import PrintServicioAutismo from "../PrintServicio/PrintServicioAutismo";
import "./ServiciosAutismo.css"


const ServiciosAutismo = () => {
  return (
    <>
    <section className="section-home-autismo">
      <div className="div-service-autismo">
      <PrintServicioAutismo
         icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1706141194/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/ico-02_zazt8x.png"}
         title={"Intervenció Psicoeducativa"}
         content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi autem expedita accusantium sapiente tenetur labore aperiam dolorem numquam harum. Eligendi, tempore asperiores ducimus esse impedit fugit aut. Totam, saepe nisi!"}
        />
      </div>
      <div className="div-service-autismo">
      <PrintServicioAutismo
        icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1706141194/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/Tutoring-Service_Icon_05-1_y93sqc.png"}
        title={"Programa d'activitats socials"}
        content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi autem expedita accusantium sapiente tenetur labore aperiam dolorem numquam harum. Eligendi, tempore asperiores ducimus esse impedit fugit aut. Totam, saepe nisi!"}
        />
      </div>
      <div className="div-service-autismo">
      <PrintServicioAutismo
        icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1706141194/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/ico-03_se9tzu.png"}
        title={"Centre de recursos d'autisme CRAPG"}
        content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi autem expedita accusantium sapiente tenetur labore aperiam dolorem numquam harum. Eligendi, tempore asperiores ducimus esse impedit fugit aut. Totam, saepe nisi!"}
        />
      </div>
    </section>
    </>
  )
}

export default ServiciosAutismo