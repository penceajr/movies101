import React from "react";
import camera from "./camera.png";
import "./AddMoviePageBody.css";
import { InputBar } from "../../components/Header/Input";
import { Button } from "../../components/Header/NavButtons/Button";
import MovieCard from "../HomePage Components/MovieCard/MovieCard";

export class AddMoviePageBody extends React.Component {

    state = {

    }

    componentDidMount (){

    }

    render(){
        return (
        <div className="add-movie-page-body" >
            <img src={camera} alt ="camera" className="movie-camera"></img> 
            <div className="add-movie-container"> 
                <div className="inputs-container">
                    <p className="add-movie-title">Add Movie</p>
                    <InputBar 
                        label="Title"
                        type="text"
                        placeholder="Insert title"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        />
                    <InputBar 
                        label="Year"
                        type="text"
                        placeholder="Insert year"
                        InputcssClass="add-input-container" 
                        LabelcssClass="add-input-label"
                        />
                    <InputBar
                        label="IMDb id"
                        type="text"
                        placeholder="Insert IMDb id"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        />
                    <InputBar
                        label="Type"
                        type="text"
                        placeholder="Insert type"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        />
                    <InputBar
                        label="Poster URL"
                        type="Insert Poster URL"
                        placeholder="insert IMDb id"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        />
                <div className="button-container">
                    <Button cssClass="add-movie-button" label="Add a movie"/>
                </div>
            </div>
        </div>    
        <div className="added-movie-container">
                <MovieCard />
                <Button cssClass="delete-movie-button-1" label="Delete movie"/>
        </div>
        
    </div>

    )
        }
}