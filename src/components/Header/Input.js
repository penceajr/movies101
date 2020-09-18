import React from "react"
import "./Input.css"



export function InputBar(props){
   
 return( 
  <div className="input-Container"> 
        <label 
            className="input-container-label">{props.label}: </label>
        <input 
            className="input-container-input" 
            label={props.label} 
            type={props.type} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChangeValue}>

        </input>
    </div>
    )
}
