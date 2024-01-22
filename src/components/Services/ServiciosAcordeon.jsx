import React from 'react'
import PrintAcordeonServicios from '../PrintServicio/printAcordeonServicios'


const ServiciosAcordeon = () => {
    const [seeAccordion,setSeeAccordion] = useState(true)
  const [seeAllServices, setSeeAllServices] = useState(false)
  return (
    <section className='section-accordion-services'>
        <div className='div-Accordion1'>
        <PrintAcordeonServicios
            title={"Intervenció educativa"}
            content={`La Logopèdia és la disciplina que engloba l’estudi, la prevenció, la detecció, l’evaluació, diagnòtic i el tractament dels trastorns de la comunicació humana.`}
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
            content={`A part de proporcionar estratègies per millorar el funcionament escolar de l’alumne/a i en la resta d’entorns.`}
            icon={"https://res.cloudinary.com/dtfugozix/image/upload/v1705884879/Fem%20Cami/Icon/iconAccordion_k4u3it.png"}
            />
        </div>
        {
          seeAllServices==false
          ?
          <div className="div-mostrar-services" onClick={()=>{setSeeAllServices(true)}}>
              <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1705887039/Fem%20Cami/Icon/iconAccordionAbajo_fwyj6d.png" 
                alt="img-flecha"
                className="img-flecha"
                onClick={()=>setSeeAccordion(true)}/>

          </div>
          :
          <> 
      </>
      
        }
        
    </section>
  )
}

export default ServiciosAcordeon