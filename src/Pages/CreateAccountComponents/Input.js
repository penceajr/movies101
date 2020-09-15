import React from "react"
import "./Input.css"



export function InputBar(props){
    console.log(props);
 return( 
  <div className="input-Container"> 
        <label className="input-container-label">{props.label}: </label>
        <input className="input-container-input" label={props.labe} type={props.type} placeholder={props.placeholder}></input>
    </div>
    )
}
