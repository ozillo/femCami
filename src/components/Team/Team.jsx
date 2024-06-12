import { useNavigate } from "react-router-dom";
import { dataTeam } from "../../data/data";
import "./Team.css";
import React, { useEffect, useState } from "react";

const Team = () => {
    const navigate = useNavigate();
    const [indexArray, setIndexArray] = useState(0);

    const choosePerson = (index, btn) => {
        btn == "menor"
            ? index > 0
                ? setIndexArray(index - 1)
                : setIndexArray(0)
            : index < 6
              ? setIndexArray(index + 1)
              : setIndexArray(6);

        const allTrabajadores = document.querySelectorAll(
            ".figure-treballador-second",
        );
        allTrabajadores[index].classList.remove("figure-trabajador-second");
        allTrabajadores[index].classList.add("figure-trabajador-principal");
        console.log(allTrabajadores);
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
    };

    useEffect(() => {
        console.log(indexArray);
        console.log(dataTeam.length);
        //console.log(dataTeam[indexArray])
    }, [indexArray]);
    return (
        <section className="team-section">
            {/* <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702082422/Fem%20Cami/Icon/chevron_left_FILL0_wght400_GRAD0_opsz24_eoe8kb.png" 
      alt="" 
      onClick={()=>choosePerson(indexArray, "menor")}
      /> */}
            <div class="custom-shape-divider-top-1706118037">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        class="shape-fill"
                    ></path>
                </svg>
            </div>
            <div className="div-tres-trabajadores">
                {dataTeam.map((elem, index) => {
                    return (
                        <figure className="figure-treballador" key={index}>
                            <img
                                src={elem.img}
                                alt={`name de ${elem.name}}`}
                                className="image-treballador"
                            />
                            <h3>{elem.name}</h3>
                            <p>{elem.job}</p>
                        </figure>
                    );
                })}
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
            {}
            {/* <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702082464/Fem%20Cami/Icon/chevron_right_FILL0_wght400_GRAD0_opsz24_dy4ost.png" 
      alt="" 
      onClick={()=>choosePerson(indexArray, "mayor")}
      /> */}
            <div className="div-btn-container">
                <img
                    src="https://res.cloudinary.com/dtfugozix/image/upload/v1706540574/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/iconGotasBlOr_qjc4di.png"
                    alt="image arrow trabajadores"
                    className="img-arrow-trabajadores2"
                />
                <button
                    className="btn-conoce-team"
                    onClick={() => navigate("/qui-som")}
                >
                    Coneix el nostre equip
                </button>
                <img
                    src="https://res.cloudinary.com/dtfugozix/image/upload/v1706540574/Fem%20Cami/iconos%20y%20vectores%20Divi%20Page/iconGotasBlOr_qjc4di.png"
                    alt="image arrow trabajadores"
                    className="img-arrow-trabajadores"
                />
            </div>
        </section>
    );
};

export default Team;
