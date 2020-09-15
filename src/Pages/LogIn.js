import React from "react" ;

import "./LogIn.css"
import { Header } from "../components/Header/Header";
import { LogInBody } from "./LoginPageComponents/LogInBody";


export function LogIn(props) {
    return (
    <div className="background-image">
    
        <Header />
    <div className="Login-container">   
        <LogInBody />
    </div>
    </div>
    )
}