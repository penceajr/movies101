import React from "react";
import { Link } from "react-router-dom";
import Movie101 from "../../Movie101.png";

import "./AppLogo.css";


export function AppLogo() {
  return( <Link to="/">
         <img src={Movie101} alt="logo" className="movie-logo" />
         </Link>)
}