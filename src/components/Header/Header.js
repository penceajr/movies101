import React from "react" ;
import "./Header.css";

import { AppLogo } from "./AppLogo";
import { MovieDetails } from "./MovieDetails";
import { MovieSearch }  from "./MovieSearch";
import { AddMovie } from "./AddMovie";
import { NavButtons } from "./NavButtons/NavButtons";



export function Header() {
    return <div className = "header">
        <AppLogo />
        <MovieDetails />
        <MovieSearch />
        <AddMovie />
        <NavButtons />
    </div>
}