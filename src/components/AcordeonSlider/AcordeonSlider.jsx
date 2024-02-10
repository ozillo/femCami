import React, { useState } from "react";
import "./AcordeonSlider.css"
import { arrayLogopedia } from "../../data/arrayServeis";



const AcordeonSlider =({arrayData})=>{
const[ServicesArray,SetServicesArray]=useState(0)

const chooseService = (index, btn) => {
    btn=="menor" 
    ? index>0
      ? SetServicesArray(index-1)
      : SetServicesArray(0)
    : index<4
      ? SetServicesArray(index+1)
      : SetServicesArray(4)


}
const allServices = document.querySelectorAll("figure-service-second")
      allServices[index].classList.remove("figure-service-second")
      allServices[index].classList.add("figure-service-principal")
      console.log(allServices)


  return(
    <div className="div-tres-services">
        {
          dataServices.map((elem, index)=>{
            return(
              <figure  className="figure-services">
                
                <img src={elem.icon} alt={`name de ${elem.name}}`} className="icon-service" />
                <h3>{elem.name}</h3>
                <p>{elem.job}</p>
              </figure>
            )
          })
        }
      </div>
  )
}
export default AcordeonSlider