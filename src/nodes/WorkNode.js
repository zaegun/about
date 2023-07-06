import React from "react"

export default function WorkNode(props) {
    return(
        <div>
            <h4>{props.title}</h4>
            <span className="description">{props.description}</span>
        </div>    
    );
}