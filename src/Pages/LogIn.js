import React from "react" ;

import "./LogIn.css"
import { Header } from "../components/Header/Header";
import { LogInBody } from "./LoginPageComponents/LogInBody";


export function LogIn() {
    return (
    <div className="background-image">
    <div className="Login-container">
        <Header />
        <LogInBody />
    </div>
    </div>
    )
}