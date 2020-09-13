import React from "react"
import movieGlasses from "./movieglasses.svg"
import "./LogInBody.css"



export class LogInBody extends React.Component{
    state = {

    }

    render (){
        return (
            <div className="LogInBody" >
                <img src={movieGlasses} alt="bechelari" className="movie-glasses"></img>

            </div>

        );
    }

}