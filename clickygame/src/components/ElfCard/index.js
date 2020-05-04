import React from "react";
import "./style.css"


function ElfCard(props) {
    return (
        <div className="card" onClick={() => props.chosenElf(props.id)} className="remove">
            <div className="img-container text-align-center">
                <img alt={props.name} src={props.image}/>
            </div>
        </div>      
    );
}

export default ElfCard;