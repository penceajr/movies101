import React from "react" ;
import "./CreateAccount.css";
import { Header } from "../components/Header/Header";
import { CreateAccountBody } from "./CreateAccountComponents/CreateAccountBody";

export function CreateAccount(props) {
    return (
        <div className="background-image">
        
            <Header />
        <div className="CreateAccount-container">   
            <CreateAccountBody />
        </div>
        </div>
        )
    }
