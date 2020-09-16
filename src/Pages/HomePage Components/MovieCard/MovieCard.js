import React from "react";
import "./MovieCard.css";

export function MovieCard(props) {
    return (
         <div className="movie-card">
            <h4>{props.title}</h4>
            <img src={props.imgSrc} alt="img" />
            
        </div>
    );     
}