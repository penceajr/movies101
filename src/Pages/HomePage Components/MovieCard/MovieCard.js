import React from "react";
import "./MovieCard.css";

export function MovieCard(props) {
    return (
         <div className="movie-card">
         
            <h4 className="movie-card-title">{props.Title}</h4>
            <p className="movie-card-imdb-Rating">{props.imdbRating}</p>
            <img src={props.Poster} alt="img" className="movie-card-img"/>
            
        </div>
    );     
}