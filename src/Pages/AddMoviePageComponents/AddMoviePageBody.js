import React from "react";
import camera from "./camera.png";
import "./AddMoviePageBody.css";
import { InputBar } from "../../components/Header/Input";
import { Button } from "../../components/Header/NavButtons/Button";
import  MovieCard  from "../HomePage Components/MovieCard/MovieCard";
// import MovieCard from "../HomePage Components/MovieCard/MovieCard";

export class AddMoviePageBody extends React.Component {
   state = {
        title:"",
        year:"",
        imageURL:"",
        released:"",
        runtime:"",
        genre:"",
        director:"",
        actors:"",
        plot:"",
        country:"",
        imdbRating:"",
    };

    handleAddTitle = event => this.setState({Title: event.target.value})

    handleAddYear = event => this.setState({Year: event.target.value})

    handleAddImageURL = event => this.setState({ImageURL: event.target.value})

    handleAddReleased = event => this.setState ({Released: event.target.value})

    handleAddRuntime = event => this.setState({Runtime: event.target.value})

    handleAddGenre = event => this.setState({Genre: event.target.value})

    handleAddDirector = event => this.setState({Director: event.target.value})

    handleAddActors = event => this.setState({Actors: event.target.value})

    handleAddPlot = event => this.setState({Plot: event.target.value})

    handleAddCountry = event => this.setState({Country: event.target.value})

    handleAddImdbRating = event => this.setState({ImdbRating : event.target.value})


    handleAddMovie = () => {
        console.log("add movie");
        fetch ("http://movies-app-siit.herokuapp.com/movies", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Auth-Token": localStorage.getItem("accessToken"),
            },
            body:JSON.stringify({
                Title: this.state.title,
                Year: this.state.year,
                Poster: this.state.imageURL,
                Released:this.state.released,
                Runtime:this.state.runtime,
                Genre:this.state.genre,
                Director:this.state.director,
                Actors:this.state.actors,
                Plot:this.state.plot,
                Country:this.state.country,
                ImdbRating:this.state.imdbRating,

            }),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                if (json.message === "You need to be authenticated to be able to create a movie") {
                    alert ("You need to be authenticated to be able to add a movie ! Please go to Create Account Page.")
                }else{
                    window.location.reload();
                }
                
            });
    };

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
                        value={this.state.value}
                        onChangeValue={this.handleAddTitle}
                        />
                    <InputBar 
                        label="Year"
                        type="text"
                        placeholder="Insert year"
                        InputcssClass="add-input-container" 
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddYear}
                        />
                    <InputBar 
                        label="ImageURL"
                        type="text"
                        placeholder="Insert image URL"
                        InputcssClass="add-input-container" 
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddImageURL}
                        />
                    <InputBar
                        label="Released"
                        type="text"
                        placeholder="Insert released"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddReleased}
                        />
                    <InputBar
                        label="Runtime"
                        type="text"
                        placeholder="Insert runtime"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddRuntime}
                        />
                    <InputBar
                        label="Genre"
                        type="text"
                        placeholder="insert genre"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddGenre}
                        />
                    <InputBar 
                        label="Director"
                        type="text"
                        placeholder="insert director"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddDirector}
                        />
                    <InputBar
                        label="Actors"
                        type="text"
                        placeholder="insert actors"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddActors}
                        />
                    <InputBar 
                        label="Plot"
                        type="text"
                        placeholder="insert plot"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddPlot}
                        />
                    <InputBar 
                        label="Country"
                        type="text"
                        placeholder="insert country"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddCountry}
                        />
                    <InputBar 
                        label="ImdbRating"
                        type="text"
                        placeholder="insert ImdbRating"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddImdbRating}
                         />

                <div className="button-container">
                    <Button 
                    cssclass="add-movie-button" 
                    label="Add a movie"
                    onClick={this.handleAddMovie}
                    />
                </div>
            </div>
        </div>    
        <div className="added-movie-container">
            <MovieCard />
        
        <div className="buttons-container">
            <Button 
            cssclass="delete-movie-button-1" 
            label="Delete movie"
            />
            <Button 
            cssclass="edit-movie-button-1" 
            label="Edit movie"
            />
        </div> 
        </div>  
    </div>
        )
    }
}