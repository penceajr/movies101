import React from "react"
import movieGlasses from "./movieglasses.svg"
import "./LogInBody.css"
import { InputBar } from "./Input"


export function LogInBody (props){   
        return (
            <div className="LogInBody" >
              <img src={movieGlasses} alt="glasses" className="movie-glasses"></img>
              <div className="Inputs-Container">
                <InputBar label="UserName" type="text" placeholder="Type your username" />
                <InputBar label="Password" type="password" placeholder="Type your password" />
                <div className="buttons-container">         
                </div>
              </div>   
            </div>

        );
}