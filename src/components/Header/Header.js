import React from "react" ;
import { AppLogo } from "./AppLogo";


import "./Header.css";
import { MovieDetails } from "./MovieDetails";
import { MovieSearch }  from "./MovieSearch";


export function Header() {
    return <div className = "header">
        <AppLogo />
        <MovieDetails />
        <MovieSearch />
    </div>
}