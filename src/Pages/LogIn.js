import React from "react" ;

import "./LogIn.css"

import { LogInBody } from "./LoginPageComponents/LogInBody";


export function LogIn(props) {
    return (
    <div className="background-image">
    <div className="Login-container">   
        <LogInBody />
    </div>
    </div>
    )
}