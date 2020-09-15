import React from "react" ;
import { AppLogo } from "./AppLogo";


import "./Header.css";
import { MovieDetails } from "./MovieDetails";
import { MovieSearch }  from "./MovieSearch";
import { NavButtons } from "./NavButtons/NavButtons";


export function Header() {
    return <div className = "header">
        <AppLogo />
        <MovieDetails />
        <MovieSearch />
        <NavButtons />
    </div>
}