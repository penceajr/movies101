import React from "react";
import "./MovieCard.css";
import star from "./star.png"

export function MovieCard(props) {
    return (
         <div className="movie-card">
            <div className="title-container">
                <h5 className="movie-card-title">{props.Title}</h5>
                <img src={star} alt="star" className="rating-star" />
                <p className="movie-card-imdb-Rating">{props.imdbRating}</p>    
            </div>

            <img src={props.Poster} alt="img" className="movie-card-img"/>
        </div>
    );     
}