import React from "react"
import "./Inputs.css"

export function InputBar(props){
    return(
        <div className="inputs-container">
            <label className="input-container-label">{props.label}</label>
            <input className="input-container-input" label={props.label} type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}