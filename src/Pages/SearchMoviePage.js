import React from "react";
import { Link } from "react-router-dom";
import Search from "/src/Search.png";
import "/components/MovieSearch.css";
import "./SearchMoviePage.css";

export function SearchMoviePage(props) {
    return(
    <div className="background-image">
    <div className="searchmovie-container">  
        <SearchMoviePageBody /> 
    </div>
    </div>
    )
}


