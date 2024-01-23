import React, { useState } from 'react'
import "./ServiciosAcordeon.css"
import PrintAcordeonServicios from '../PrintServicio/printAcordeonServicios'


const ServiciosAcordeon = () => {
    const [seeAccordion,setSeeAccordion] = useState(true)
  const [seeAllServices, setSeeAllServices] = useState(false)
  return (
    <section className='section-accordion-services'>
        <div className='div-description-services'>
        <h1>Els nostres serveis</h1>
        <div className='divider-Eslogan'></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Cras a nunc venenatis, fringilla eros eget, semper orci. In a <br></br>nisi nunc. Duis maximus ligula a vehicula tempor. Proin<br></br> efficitur, ante eu lobortis posuere, elit massa.
        </p>
        </div>
        <div className='div-all-Accordion'>
        <div className='div-Accordion1'>
        <PrintAcordeonServicios
            title={"Intervenció educativa"}
            content={`La Intervenció educativa és la disciplina que engloba l’estudi,la prevenció, la detecció, l’evaluació, diagnòtic i el tractament dels trastorns de la comunicació humana.`}
            icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"}
            />
        </div>
        <div className='div-Accordion2'>
        <PrintAcordeonServicios
            title={"Logopèdia"}
            content={`La Logopèdia és la disciplina que engloba l’estudi, la prevenció, la detecció, l’evaluació, diagnòtic i el tractament dels trastorns de la comunicació humana.`}
            icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"}
            />
        </div>
        <div className='div-Accordion3'>
        <PrintAcordeonServicios
            title={"Terapia ocupacional"}
            content={`La teràpia ocupacional es una professió sòcio-sanitària que vol promoure la major autonomia, benestar i qualitat de vida en les persones, a traves de l’ocupació.`}
            icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"}
            />
        </div>
        <div className='div-Accordion4'>
        <PrintAcordeonServicios
            title={"Reeducació pedagògica"}
            content={`La Reeducació pedagògica es una professió sòcio-sanitària que vol promoure la major autonomia, benestar i qualitat de vida en les persones, a traves de l’ocupació.`}
            icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"}
            />
        </div>
        </div>
        <div class="wave"></div>

    </section>
  )
}

export default ServiciosAcordeon