import React from "react";
import "./style.css"


function ElfCard(props) {
    return (
        <div className="card">
            <div className="img-container text-align-center">
                <img alt={props.name} src={props.image}/>
            </div>
            <span onClick={() => props.chosenElf(props.id)} className="remove">
                x
            </span>
        </div>      
    );
}

export default ElfCard;