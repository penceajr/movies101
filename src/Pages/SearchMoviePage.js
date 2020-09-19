import React from "react";
import { Link } from "react-router-dom";
import "./SearchMoviePage.css";
import { MovieSearch } from "../components/Header/MovieSearch"

export function SearchMoviePage (props) {
    return(
    <div className="background-image">
    <div className="searchmovie-container">  
        <SearchMoviePageBody /> 
    </div>
    </div>
    )
}

