import React from "react" ;
import "./Header.css";

import { AppLogo } from "./AppLogo";
import { AllMovies } from "./AllMovies";
import { MovieSearch }  from "./MovieSearch";
import { AddMovie } from "./AddMovie";
import { NavButtons } from "./NavButtons/NavButtons";



export function Header() {
    return <div className = "header">
        <AppLogo />
        <AllMovies />
        <MovieSearch />
        <AddMovie />
        <NavButtons />
    </div>
}