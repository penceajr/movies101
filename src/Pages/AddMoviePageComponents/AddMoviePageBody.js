import React from "react";
import camera from "./camera.png";
import "./AddMoviePageBody.css";
import { InputBar } from "../../components/Header/Input";
import { Button } from "../../components/Header/NavButtons/Button";

export class AddMoviePageBody extends React.Component {
   state = {
        Title:"",
        Year:"",
        ImageURL:"",
        Released:"",
        Runtime:"",
        Genre:"",
        Director:"",
        Actors:"",
        Plot:"",
        Country:"",
        ImdbRating:"",
        UrlTyped: ""
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
        fetch ("http://movies-app-siit.herokuapp.com/movies", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Auth-Token": localStorage.getItem("accessToken"),
            },
            body:JSON.stringify({
                Title: this.state.Title,
                Year: this.state.Year,
                Poster: this.state.ImageURL,
                Released:this.state.Released,
                Runtime:this.state.Runtime,
                Genre:this.state.Genre,
                Director:this.state.Director,
                Actors:this.state.Actors,
                Plot:this.state.Plot,
                Country:this.state.Country,
                ImdbRating:this.state.ImdbRating,

            }),
        })
            .then((res) => res.json())
            .then((json) => {
                window.location.reload();                
            });
    };
    
    getURLValue= event => {
         this.setState({UrlTyped: event.target.value})
        }

    RenderPosterContainer = () => {
    if(this.state.UrlTyped){
        return (
            <div>
                <h5 className="movie-card-title">{this.state.Title}</h5>   
                <p className="movie-card-imdb-Rating">{this.state.ImdbRating}</p>    
                <img src={this.state.UrlTyped} alt="poster" className="img-container"></img>
            </div>
            )
    }   
        return <p className="initial-paragraph">Your Movie</p>

    }

    render(){
        return (
        <div className="add-movie-page-body">
            <img src={camera} alt ="camera" className="movie-camera"></img> 
            <div className="add-movie-container"> 
                <div className="inputs-container">
                    <p className="add-movie-title">Add a Movie</p>
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
                        label="ImdbRating"
                        type="text"
                        placeholder="Insert ImdbRating"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddImdbRating}
                         />
                    <InputBar 
                        label="ImageURL"
                        type="text"
                        placeholder="Insert image URL"
                        InputcssClass="add-input-container" 
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onLeave={this.getURLValue}
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
                        placeholder="Insert genre"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddGenre}
                        />
                    <InputBar 
                        label="Director"
                        type="text"
                        placeholder="Insert director"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddDirector}
                        />
                    <InputBar
                        label="Actors"
                        type="text"
                        placeholder="Insert actors"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddActors}
                        />
                    <InputBar 
                        label="Plot"
                        type="text"
                        placeholder="Insert plot"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddPlot}
                        />
                    <InputBar 
                        label="Country"
                        type="text"
                        placeholder="Insert country"
                        InputcssClass="add-input-container"
                        LabelcssClass="add-input-label"
                        value={this.state.value}
                        onChangeValue={this.handleAddCountry}
                        />
                   
                </div>
                <div className="button-container">
                    <div className="add-button">
                        <Button 
                        cssclass="add-movie-button" 
                        label="Add a movie"
                        onSubmit={this.handleAddMovie}
                        />
                    </div>
                </div>
            
        </div>    
        <div className="added-movie-container">
            {this.RenderPosterContainer()}
        </div>  
    </div>
        )
    }
}