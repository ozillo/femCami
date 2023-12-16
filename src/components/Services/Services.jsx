import "./Services.css"
import React from 'react'
import { useState } from "react"
import PrintServicio from "../PrintServicio/PrintServicio"

const Services = () => {
  const [seeFigure,setSeeFigure] = useState(true)
  const [seeAllServicis, setSeeAllServicis] = useState(false)
 
  return (
    <section className="services-section">

      <div className="div-figure-left">
        <PrintServicio 
        title={"Terapia ocupacional"}
        description={`La teràpia ocupacional es una professió sòcio-sanitària que vol promoure la major autonomia, benestar i qualitat de vida en les persones, a traves de l’ocupació.
        El/la terapeuta ocupacional fa servir l’activitat de forma terapèutica per la prevenció de les malalties i/o discapacitats, el manteniment de la salut, la rehabilitació de la funcionalitat i l’adaptació del entorn de les persones. Tot això amb l’objectiu d’aconseguir un desenvolupament i una participació satisfactoris en totes les activitats de la vida diària.`}
        image={"https://res.cloudinary.com/dtfugozix/image/upload/v1702073081/Fem%20Cami/Servicios/Terapia%20Ocupacional/terapiaOcupacionalVector_mua7ha.png"}
        links={[<a href="#">Què és la terapia ocupacional?</a>, <a href="#">Objectius i metodología del servei</a>,<a href="#">Què és la integració sensorial</a>,<a href="#">Quan és necessària la teràpia ocupacional?</a>]}
        />
      </div>

      <div className="div-figure-right">
        <PrintServicio 
        title={"Pràctiques centrades en la família"}
        description={`Actualment estem formades per aplicar la Pràctica Centrada en la Família, un model on l’evidència científica corrobora que en l’actualitat, les intervencions amb major eficàcia i eficiència són les que tenen per objectiu millorar la qualitat de vida de les persones amb discapacitat i les seves famílies. Les pràctiques professionals han anat experimentant una transformació cap a intervencions en les quals la família participen de manera activa durant tot el pla d’intervenció, aportant el seu rol com a coneixedors i amb llarga continuïtat en la vida dels seus fills.`}
        image={"https://res.cloudinary.com/dtfugozix/image/upload/v1702073081/Fem%20Cami/Servicios/Terapia%20Ocupacional/terapiaOcupacionalVector_mua7ha.png"}
        links={[<a href="#">En que consisteixen?</a>, <a href="#">Objectius i metodología del servei</a>,<a href="#">Com les apliquem?</a>,<a href="#">Quan son necesaries?</a>]}
        />
      </div>

        {
          seeAllServicis==false
          ?
          <div className="div-muestra-servicis" onClick={()=>{setSeeAllServicis(true)}}>
              <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702076354/Fem%20Cami/Logo/flecha-hacia-abajo-para-navegar_ncfzbc.png" 
                alt="img-flecha"
                className="img-flecha"
                onClick={()=>setSeeFigure(true)}/>

          </div>
          :
          <>
          <div className="div-figure-left">
            <PrintServicio 
            title={"Logopèdia"}
            description={`La Logopèdia és la disciplina que engloba l’estudi, la prevenció, la detecció, l’evaluació, diagnòtic i el tractament dels trastorns de la comunicació humana: les alteracions de la veu, de l’audició, de la parla, del llenguatge (oral, escrit, gestual); i de les funcions orofacilas i deglutòries.`}
            image={"https://res.cloudinary.com/dtfugozix/image/upload/v1702747324/Fem%20Cami/Servicios/Logopedia/logopediavector1_f1knqk.png"}
            links={[<a href="#">En que consisteix?</a>, <a href="#">Objectius i metodologia del servei</a>,<a href="#">Quan s'aplica?</a>]}
            />
          </div>

          <div className="div-figure-right">
            <PrintServicio 
            title={"Reeducació pedagògica"}
            description={`A part de proporcionar estratègies per millorar el funcionament escolar de l’alumne/a i en la resta d’entorns, molts cops ens trobem que els aprenentatges bàsics d’infantil no acaben de estar assolits i això dificulta poder avançar amb les habilitats i aprenetatges, com la lectura i escriptura, els conceptes i continguts matemàtics que es troben més endavant.`}
            image={"https://res.cloudinary.com/dtfugozix/image/upload/v1702749310/Fem%20Cami/Servicios/Reeducaci%C3%B3%20pedag%C3%B2gica/reeducacionpedagogica1_y4neoe.png"}
            links={[<a href="#">Com ho apliquem?</a>, <a href="#">Objectius i metodología del servei</a>,<a href="#">Quan ho apliquem?</a>]}
            />
          </div>
          <div className="div-figure-left">
            <PrintServicio 
            title={"Reforç escolar"}
            description={`A Fem Camí duem a terme un reforç escolar personalitzat de les dificultats acadèmiques que es puguin originar durant el curs escolar de l’alumne/a, com també dels continguts que s’hagin d’anar treballant.`}
            image={"https://res.cloudinary.com/dtfugozix/image/upload/v1702073081/Fem%20Cami/Servicios/Terapia%20Ocupacional/terapiaOcupacionalVector_mua7ha.png"}
            links={[<a href="#">En que consisteix?</a>, <a href="#">Objectius i metodologia del servei</a>,<a href="#">Quan s'aplica?</a>]}
            />
          </div>
          <div className="div-figure-right">
            <PrintServicio 
            title={"Planificació i tècniques d'estudi"}
            description={`Dins del servei específic de reforç escolar grupal per adolescents amb dificultats escolars, i dins de les intervencions educatives que duem amb adolescents amb dificultats d’aprenentatge o amb diagnòstic, duem un programa d’hàbits d’estudi, planificació i tècniques, on orientem l’alumne/a, donant pautes i estratègies d’estudi, d’organització, per tal d’afavorir en la seva autonomia de treball.`}
            image={"https://res.cloudinary.com/dtfugozix/image/upload/v1702073081/Fem%20Cami/Servicios/Terapia%20Ocupacional/terapiaOcupacionalVector_mua7ha.png"}
            links={[<a href="#">Com ho apliquem?</a>,<a href="#">Quines tècniques existeixen?</a> ,<a href="#">Objectiuis i metodologia del servei</a>]}
            />
          </div>
          
      </>
      
        }
        
    </section>
    
  )
}

export default Services