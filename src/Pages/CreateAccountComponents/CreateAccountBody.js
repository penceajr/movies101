import React from "react"
import PopSuc from "./PopSuc.png"
import "./CreateAccountBody.css"
import { InputBar } from "./Input"


export function CreateAccountBody (props){   
        return (
            <div className="CreateAccountBody" >
                <img src={PopSuc} alt="popsuc" className="pop-suc"></img>
                <div className="Inputs-Container">
                  <InputBar label="Choose Username" type="text" placeholder="Type your username" />
                  <InputBar label="Choose Password" type="password" placeholder="Type your password" />
                  <div className="buttons-container">

                  </div>
                </div>
            </div>

        );
}