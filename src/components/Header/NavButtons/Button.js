import React from "react";

import "./Button.css";

export function Button(props) {
    return <button className={props.cssClass} onClick={props.onSubmit}>{props.label}</button>;
        // <div className={"movie-page-button"+ (this.props.className ? `${this.props.className}` : "")}>
        //     <button className={props.cssClass} onClick={props.onSubmit}>{props.label}</button>;
        // </div>  
   
}