import { dataTeam } from "../../data/data"
import "./Team.css"
import React, { useEffect, useState } from 'react'

const Team = () => {
  const [indexArray, setIndexArray] = useState(0)

  const choosePerson = (index, btn) => {
    btn=="menor" 
    ? index>0
      ? setIndexArray(index-1)
      : setIndexArray(0)
    : index<6
      ? setIndexArray(index+1)
      : setIndexArray(6)


      const allTrabajadores = document.querySelectorAll(".figure-treballador-second")
      allTrabajadores[index].classList.remove("figure-trabajador-second")
      allTrabajadores[index].classList.add("figure-trabajador-principal")
      console.log(allTrabajadores)
      /* if(btn=="menor" && index==0){
        let firstPerson = document.querySelector(".figure-treballador-second")
        let secondPerson = document.querySelector(".figure-treballador-principal")
        firstPerson.classList.remove("figure-treballador-second")
        firstPerson.classList.add("figure-treballador-principal")
        secondPerson.classList.remove("figure-treballador-principal")
        secondPerson.classList.add("figure-treballador-second")
      }else if(btn=="mayor" && index==6){
        let firstPerson = document.querySelector(".figure-treballador-last")
        let secondPerson = document.querySelector(".figure-treballador-principal")
        firstPerson.classList.remove("figure-treballador-last")
        firstPerson.classList.add("figure-treballador-principal")
        secondPerson.classList.remove("figure-treballador-principal")
        secondPerson.classList.add("figure-treballador-second")
      }else{
        
      } */
    
  }

  useEffect(()=>{
    console.log(indexArray)
    console.log(dataTeam.length)
    //console.log(dataTeam[indexArray])
  
  },[indexArray])
  return (
    <section className="team-section">
      {/* <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702082422/Fem%20Cami/Icon/chevron_left_FILL0_wght400_GRAD0_opsz24_eoe8kb.png" 
      alt="" 
      onClick={()=>choosePerson(indexArray, "menor")}
      /> */}
      <div className="div-tres-trabajadores">
        {
          dataTeam.map((elem, index)=>{
            return(
              <figure className="figure-treballador">
                <img src={elem.img} alt={`name de ${elem.name}}`} className="image-treballador" />
                <h3>{elem.name}</h3>
                <p>{elem.job}</p>
              </figure>
            )
          })
        }
      </div>
      {/* <figure className="figure-treballador-principal">
        <h3>{dataTeam[indexArray].name}</h3>
        <img src={dataTeam[indexArray].img} alt={`name de {dataTeam[3].name}`} className="image-treballador" />
      </figure>
      <figure className="figure-treballador-second">
        <h3>{dataTeam[indexArray+1].name}</h3>
        <img src={dataTeam[indexArray+1].img} alt={`name de {dataTeam[3].name}`} className="image-treballador" />
      </figure>
      <figure className="figure-treballador-second">
        <h3>{dataTeam[indexArray+2].name}</h3>
        <img src={dataTeam[indexArray+2].img} alt={`name de {dataTeam[3].name}`} className="image-treballador" />
      </figure> */}
      {
        
      }
      {/* <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702082464/Fem%20Cami/Icon/chevron_right_FILL0_wght400_GRAD0_opsz24_dy4ost.png" 
      alt="" 
      onClick={()=>choosePerson(indexArray, "mayor")}
      /> */}
      <button>Coneix nostre equip</button>

    </section>
  )
}

export default Team