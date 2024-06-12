import React, { useRef } from 'react'
import "./Postits.css"


const PrintPostits = ({
    titulo,
    contenido,
    visible,
    onClick,
    option,
}) => {
    const contentHeight = useRef();
    const handleIndex = (indice) => {
        setIsVisible((prevIndex) => (prevIndex === indice ? null : indice));
    };

    return (
        <div className="postit1">
        <div
            className={`div-wrapper-acordeon${visible ? `-open div-wrapper-option-${option}` : ""}`}
        >
            
            <div
                className={`div-acordeon-question${visible ? `-open` : ""} div-acordeon-question-option-${option}`}
                onClick={onClick}
            >
                <h3>{titulo}</h3>
            </div>
            </div>
            <div
                ref={contentHeight}
                className="div-acordeon-content"
                style={
                    visible
                        ? {
                              height: contentHeight.current.scrollHeight,
                              margin: "20px 0",
                          }
                        : { height: "0px", color: "transparent" }
                }
            >
                {contenido.length === 1 ? (
                    <p>{contenido}</p>
                ) : (
                    contenido.map((elem, index) => <p>· {elem}</p>)
                )}
            </div>
        </div>
    );
};
export default PrintPostits

{/* <div class="all-postit">
        <div className="postit1">
            <h3>{titulo}</h3>
                    <p>
                {contenido}<br>
                        {contenido}<br>
                        {contenido}<br>
                {contenido}<br>
                    </p>
          </div>
          <div className="postit2">
            <h3>{titulo}</h3>
                    <p>
                {contenido}<br>
                        {contenido}<br>
                        {contenido}<br>
                {contenido}<br>
                {contenido}<br>
                    </p>
          </div>
          <div className="postit3">
            <h3>{titulo}</h3>
                    <p>
                {contenido}<br>
                        {contenido}<br>
                        {contenido}<br>
                {contenido}<br>
                {contenido}<br>
                    </p>
          </div>
          <div className="postit4">
            <h3>{titulo}</h3>
                    <p>
                {contenido}<br>
                        {contenido}<br>
                        {contenido}<br>
                {contenido}<br>
                {contenido}<br>
                {contenido}
                    </p>
          </div>
    </div> */}