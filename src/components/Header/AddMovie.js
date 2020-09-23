import React from "react";
import {Link} from "react-router-dom";
import clapperboard from "../../clapperboard.png";


import "./AddMovie.css";

export function AddMovie () {
    return ( <Link to = "/AddMovie">
        <img src={clapperboard} alt="add" className="add-movie-logo" />
        </Link>)
}