import React from "react";

import "./MovieCard.css";

export function MovieCard(props) {
    return (
         <div className="movie-card">
            <img src={props.imgSrc} alt="img" />
            <h6>{props.title}</h6>
        </div>
    );     
}