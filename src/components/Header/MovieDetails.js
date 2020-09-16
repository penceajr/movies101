import React from "react";
import { Link } from "react-router-dom";
import Rola from "../../Rola.png";

import "./MovieDetails.css";

export function MovieDetails () {
    return ( <Link to = "/MovieDetails">
        <img src={Rola} alt="details" className="movie-details" />
        </Link>)
}