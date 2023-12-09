import "./Services.css"
import React from 'react'
import { useState } from "react"

const Services = () => {
  const [seeFigure,setSeeFigure] = useState(true)
 
  return (
    <section className="services-section">
      <figure className="figure-servici-home">
        {
           seeFigure===true
           ?
           <>
           <div className="div-figure-img-tittle">
        <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702073081/Fem%20Cami/Servicios/Terapia%20Ocupacional/terapiaOcupacionalVector_mua7ha.png" alt="logopediaServeis" 
        
        />
          <div className="div-figure-info">
            <h2>Terapia ocupacional</h2>
            <p>La teràpia ocupacional es una professió sòcio-sanitària que vol promoure la major autonomia, benestar i qualitat de vida en les persones, a traves de l’ocupació.
            El/la terapeuta ocupacional fa servir l’activitat de forma terapèutica per la prevenció de les malalties i/o discapacitats, el manteniment de la salut, la rehabilitació de la funcionalitat i l’adaptació del entorn de les persones. Tot això amb l’objectiu d’aconseguir un desenvolupament i una participació satisfactoris en totes les activitats de la vida diària.
            </p>
          </div>
        </div>
        <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702076354/Fem%20Cami/Logo/flecha-hacia-abajo-para-navegar_ncfzbc.png" 
        alt="img-flecha"
        className="img-flecha"
        onClick={()=>setSeeFigure(false)}
        />
           </>
           :
           <>
           <h2>Terapia ocupacional</h2>
           <p>FALSE</p>
           <p>FALSE</p>
           <p>FALSE</p>
           <p>FALSE</p>
           <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702076354/Fem%20Cami/Logo/flecha-hacia-abajo-para-navegar_ncfzbc.png" 
        alt="img-flecha"
        className="img-flecha"
        onClick={()=>setSeeFigure(true)}
        />

           </>
           

        }
        
      </figure>


      <figure className="figure-servici-home">
        <div className="div-figure-img-tittle">
          
          <div className="div-figure-info">
            <h2>Pràctiques centrades en la família</h2>
            <p>Actualment estem formades per aplicar la Pràctica Centrada en la Família, un model on l’evidència científica corrobora que en l’actualitat, les intervencions amb major eficàcia i eficiència són les que tenen per objectiu millorar la qualitat de vida de les persones amb discapacitat i les seves famílies. Les pràctiques professionals han anat experimentant una transformació cap a intervencions en les quals la família participen de manera activa durant tot el pla d’intervenció, aportant el seu rol com a coneixedors i amb llarga continuïtat en la vida dels seus fills.</p>
          </div>
          <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702073617/Fem%20Cami/Servicios/Terapia%20Ocupacional/practiquesFamilia_sdugpf.png" alt="practicaServeis" />
        </div>
        <button>Mes info</button>
      </figure>
      <figure className="figure-servici-home">
        <div className="div-figure-img-tittle">
        <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702073081/Fem%20Cami/Servicios/Terapia%20Ocupacional/terapiaOcupacionalVector_mua7ha.png" alt="logopediaServeis" />
          <div className="div-figure-info">
            <h2>Logopèdia</h2>
            <p>La Logopèdia és la disciplina que engloba l’estudi, la prevenció, la detecció, l’evaluació, diagnòtic i el tractament dels trastorns de la comunicació humana: les alteracions de la veu, de l’audició, de la parla, del llenguatge (oral, escrit, gestual); i de les funcions orofacilas i deglutòries.</p>
          </div>
        </div>
        <button>Mes info</button>
      </figure>
      <figure className="figure-servici-home">
        <div className="div-figure-img-tittle">
          <div className="div-figure-info">
            <h2>Reeducació pedagògica</h2>
            <p>A part de proporcionar estratègies per millorar el funcionament escolar de l’alumne/a i en la resta d’entorns, molts cops ens trobem que els aprenentatges bàsics d’infantil no acaben de estar assolits i això dificulta poder avançar amb les habilitats i aprenetatges, com la lectura i escriptura, els conceptes i continguts matemàtics que es troben més endavant.</p>
          </div>
          <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702073617/Fem%20Cami/Servicios/Terapia%20Ocupacional/practiquesFamilia_sdugpf.png" alt="logopediaServeis" />

        </div>
        <button>Mes info</button>
      </figure>
      <figure className="figure-servici-home">
        <div className="div-figure-img-tittle">
        <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702073081/Fem%20Cami/Servicios/Terapia%20Ocupacional/terapiaOcupacionalVector_mua7ha.png" alt="logopediaServeis" />
          <div className="div-figure-info">
            <h2>Reforç escolar</h2>
            <p>A Fem Camí duem a terme un reforç escolar personalitzat de les dificultats acadèmiques que es puguin originar durant el curs escolar de l’alumne/a, com també dels continguts que s’hagin d’anar treballant.</p>
          </div>
        </div>
        <button>Mes info</button>
      </figure>
      <figure className="figure-servici-home">
        <div className="div-figure-img-tittle">
          <div className="div-figure-info">
            <h2>Planificació i tècniques d'estudi</h2>
            <p>Dins del servei específic de reforç escolar grupal per adolescents amb dificultats escolars, i dins de les intervencions educatives que duem amb adolescents amb dificultats d’aprenentatge o amb diagnòstic, duem un programa d’hàbits d’estudi, planificació i tècniques, on orientem l’alumne/a, donant pautes i estratègies d’estudi, d’organització, per tal d’afavorir en la seva autonomia de treball.</p>
          </div>
          <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702073617/Fem%20Cami/Servicios/Terapia%20Ocupacional/practiquesFamilia_sdugpf.png" alt="logopediaServeis" />

        </div>
        <button>Mes info</button>
      </figure>
      <figure className="figure-servici-home">
        <div className="div-figure-img-tittle">
        <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702073081/Fem%20Cami/Servicios/Terapia%20Ocupacional/terapiaOcupacionalVector_mua7ha.png" alt="logopediaServeis" />
          <div className="div-figure-info">
            <h2>Reforç escolar</h2>
            <p>A Fem Camí duem a terme un reforç escolar personalitzat de les dificultats acadèmiques que es puguin originar durant el curs escolar de l’alumne/a, com també dels continguts que s’hagin d’anar treballant.</p>
          </div>
        </div>
        <button>Mes info</button>
      </figure>
      <figure className="figure-servici-home">
        <div className="div-figure-img-tittle">
          <div className="div-figure-info">
            <h2>Cos i moviment</h2>
            <p>A Fem Camí duem a terme un reforç escolar personalitzat de les dificultats acadèmiques que es puguin originar durant el curs escolar de l’alumne/a, com també dels continguts que s’hagin d’anar treballant.</p>

          </div>
          <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702073617/Fem%20Cami/Servicios/Terapia%20Ocupacional/practiquesFamilia_sdugpf.png" alt="logopediaServeis" />

        </div>
        <button>Mes info</button>
      </figure>
    </section>
    
  )
}

export default Services