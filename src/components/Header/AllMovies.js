import React from "react";
import { Link } from "react-router-dom";
import Rola from "../../Rola.png";

import "./AllMovies.css"; 

export function AllMovies () {
    return ( <Link to = "/AllMovies">
        <img src={Rola} alt="movies" className="all-movies" />
        </Link>)
} 