import React from "react"
import "./Input.css"



export function InputBar(props){
   
 return( 
  <div className="input-Container"> 
        <label 
            className={props.LabelcssClass}>{props.label}: </label>
        <input 
            className={props.InputcssClass} 
            label={props.label} 
            type={props.type}  
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChangeValue}
            onBlur={props.onLeave}>
        </input>
    </div>
    )
}
