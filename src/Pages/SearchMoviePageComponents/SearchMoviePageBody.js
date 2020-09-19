import React from "react"
import "./SearchMoviePageBody.css"
import { InputBar } from "./Inputs"

export function SearchMoviePageBody (props) {
    return (
        <div className="SearchMoviePageBody">
            <h2>Search a movie by:</h2>
            <div className="Inputs-Container">
                <InputBar label="Title" type="text" placeholder="title"/>
                <InputBar label="Year" type="text" placeholder="year"/>
                <InputBar label="Genre" type="text" placeholder="genre"/>
                <InputBar label="Country" type="text" placeholder="country"/>
                <InputBar label="Language" type="text" placeholder="language"/>
                <InputBar label="IMDb rating" type="text" placeholder="IMDb rating"/>
                <InputBar label="Runtime" type="text" placeholder="runtime"/>
                <InputBar label="IMDb votes" type="text" placeholder="IMDb votes"/>
                <InputBar label="Type" type="text" placeholder="type"/>
            </div>
            <h2>Recommended movies:</h2>
            <div className="Recommended-Movies-Container">
                {/* Recommended movies */}
            </div>
        </div>
        
    );
}