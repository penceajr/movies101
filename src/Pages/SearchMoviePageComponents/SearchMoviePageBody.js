import React from "react"
import "./SearchMoviePageBody.css"
import { InputBar } from "../../components/Header/Input"
import { Button } from "../../components/Header/NavButtons/Button"

export function SearchMoviePageBody (props) {
    return (
        <div className="SearchMoviePageBody">
            <h2>Search a movie by:</h2>
            <div className="searchPage-Inputs-Container">
                <InputBar LabelcssClass="search-label" InputcssClass="search-input" label="Title" type="text" placeholder="Movie Title"/>
                <InputBar LabelcssClass="search-label" InputcssClass="search-input" label="Year" type="text" placeholder="Movie Year"/>
                <InputBar LabelcssClass="search-label" InputcssClass="search-input" label="Genre" type="text" placeholder="Genre"/>
                <InputBar LabelcssClass="search-label" InputcssClass="search-input" label="Country" type="text" placeholder="Country"/>
                <InputBar LabelcssClass="search-label" InputcssClass="search-input" label="Language" type="text" placeholder="Language"/>
                <InputBar LabelcssClass="search-label" InputcssClass="search-input" label="IMDb rating" type="text" placeholder="IMDb rating"/>
                <InputBar LabelcssClass="search-label" InputcssClass="search-input" label="Runtime" type="text" placeholder="Runtime"/>
                <InputBar LabelcssClass="search-label" InputcssClass="search-input" label="IMDb votes" type="text" placeholder="IMDb votes"/>
                <InputBar LabelcssClass="search-label" InputcssClass="search-input" label="Type" type="text" placeholder="Type"/>
            </div>
            <Button cssClass="searchMoviePage-button" label="Search"/>
            <h2>Recommended movies:</h2>
            <div className="Recommended-Movies-Container">
                {/* Recommended movies */}
                
            </div>
        </div>
        
    );
}