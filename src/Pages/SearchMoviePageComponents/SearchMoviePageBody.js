import React from "react"
import "./SearchMoviePageBody.css"
import { InputBar } from "../../components/Header/Input"
import { Button } from "../../components/Header/NavButtons/Button"
import MovieCard from "../HomePage Components/MovieCard/MovieCard"

export class SearchMoviePageBody extends React.Component {
        state = {
            FoundMovie: [],
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
        fetch("https://movies-app-siit.herokuapp.com/movies?take=99999999", {
        method: "GET",
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
          });
      };
   
      componentDidMount() {
          this.handleSearchMovieBy();
      }     
      
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
            onSubmit={this.handleSearchMovieBy}
            />
            </div>

            
            
            <h2>Movie found:</h2>
            
           <div className="Movie-Found-Container">
            {this.state.FoundMovie.map((element, index) => (
                <MovieCard 
                    id={element._id}
                    key={index}
                    Title={element.Title}
                    imdbRating={element.imdbRating}
                    Poster={element.Poster}
                />    
            ))
            }
            </div>
        </div>
        
    );
     }
    }
