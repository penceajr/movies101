import React from "react"
import "./SearchMoviePageBody.css"
import { InputBar } from "../../components/Header/Input"
import { Button } from "../../components/Header/NavButtons/Button"
import  render from "@testing-library/react"
import MovieCard from "../HomePage Components/MovieCard/MovieCard"

export class SearchMoviePageBody extends React.Component {
        state = {
            Title:"",
            Year:"",
            Genre:"",
            Country:"",
            imdbRating:"",
            Runtime:"",
            imdbVotes:"",
            Type:"",
        };

    handleTitle = event => this.setState({Title: event.target.value})
    handleYear = event => this.setState({Year: event.target.value})
    handleGenre = event => this.setState({Genre: event.target.value})
    handleCountry = event => this.setState({Country: event.target.value})
    handleLanguage = event => this.setState({Language:event.target.value})
    handleimdbRating = event => this.setState({imdbRating: event.target.value})
    handleRuntime = event => this.setState({Runtime: event.target.value})
    handleimdbVotes = event => this.setState({imdbVotes: event.target.values})
    handleType = event => this.setState({Type: event.target.value})


    handleSearchMovieBy = () => {
        console.log("search movie by");
        fetch("https://movies-app-siit.herokuapp.com/movies", {
        method: "GET",
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            Title: this.state.Title,
            Year: this.state.Year,
            Genre: this.state.Genre,
            Country: this.state.Country,
            Language: this.state.Language,
            ImdbRating: this.state.imdbRating,
            Runtime: this.state.Runtime,
            ImdbVotes: this.state.imdbVotes,
            Type: this.state.Type,
        }),
    })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            if (json.message === "An invalid regular expression was supplied"){
                alert ("The movie is not on a searchable field")
            }else{
                window.location.reload();
            }
          });
      };
   
                
    render() {
     return (
        <div className="SearchMoviePageBody">
            <h2>Search a movie by:</h2>
            <div className="searchPage-Inputs-Container">
                <InputBar 
                label="Title"
                type="text"
                placeholder="Movie Title"
                LabelcssClass="search-label" 
                InputcssClass="search-input" 
                value={this.state.value}
                onChangeValue={this.handleTitle}
                />

                <InputBar 
                label="Year" 
                type="text" 
                placeholder="Movie Year"
                LabelcssClass="search-label" 
                InputcssClass="search-input" 
                value={this.state.value}
                onChangeValue={this.handleYear}
                />
                
                <InputBar
                label="Genre" 
                type="text" 
                placeholder="Genre"
                LabelcssClass="search-label" 
                InputcssClass="search-input" 
                value={this.state.value}
                onChangeValue={this.handleGenre}
                 />
                
                <InputBar 
                label="Country" 
                type="text" 
                placeholder="Country"
                LabelcssClass="search-label" 
                InputcssClass="search-input" 
                value={this.state.value}
                onChangeValue={this.handleCountry}
                />
                
                <InputBar 
                label="Language" 
                type="text" 
                placeholder="Language"
                LabelcssClass="search-label" 
                InputcssClass="search-input" 
                value={this.state.value}
                onChangeValue={this.handleLanguage}
                />
                
                <InputBar
                label="IMDb Rating" 
                type="text" 
                placeholder="IMDb Rating"
                LabelcssClass="search-label" 
                InputcssClass="search-input" 
                value={this.state.value}
                onChangeValue={this.handleimdbRating} 
                />
                
                <InputBar 
                label="Runtime" 
                type="text" 
                placeholder="Runtime"
                LabelcssClass="search-label" 
                InputcssClass="search-input" 
                value={this.state.value}
                onChangeValue={this.handleRuntime}
                />
                
                <InputBar 
                label="IMDb Votes" 
                type="text" 
                placeholder="IMDb Votes"
                LabelcssClass="search-label" 
                InputcssClass="search-input" 
                value={this.state.value}
                onChangeValue={this.handleimdbVotes}
                />
                
                <InputBar
                label="Type" 
                type="text" 
                placeholder="Type"
                LabelcssClass="search-label" 
                InputcssClass="search-input" 
                value={this.state.value}
                onChangeValue={this.handleType}
                />

            </div>
            <div className="button-container">
            <Button 
            cssClass="searchMoviePage-button" 
            label="Search"
            onClick={this.handleSearchMovieBy}
            />
            </div>

            
            
            <h2>All movies:</h2>
            
           <div className="Movie-Found-Container">
                <MovieCard />    
            </div>
        </div>
        
    );
     }
    }
