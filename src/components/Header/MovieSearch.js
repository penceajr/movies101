import React from "react";
import { Link } from "react-router-dom";
import Search from "../../Search.png";
import { SearchMoviePage } from "../../Pages/SearchMoviePage"

import "./MovieSearch.css";

export function MovieSearch() {
    return ( <Link to = "/MovieSearch"> 
        <img src={Search} alt ="search" className="search-logo" />
        </Link>)
};