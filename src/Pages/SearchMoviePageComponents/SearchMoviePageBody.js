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
            CreatedURL: "http://movies-app-siit.herokuapp.com/movies?"
        };

    handleTitle = event => this.setState({Title: event.target.value})
    handleYear = event => this.setState({Year: event.target.value})
    handleGenre = event => this.setState({Genre: event.target.value})
    handleCountry = event => this.setState({Country: event.target.value})
    handleLanguage = event => this.setState({Language:event.target.value})
    handleimdbRating = event => this.setState({imdbRating: event.target.value})
    handleRuntime = event => this.setState({Runtime: event.target.value})
    handleimdbVotes = event => this.setState({imdbVotes: event.target.value})
    handleType = event => this.setState({Type: event.target.value})


handleSearchMovieBy = (secondUrlPart) => {
        console.log(this.state.CreatedURL,secondUrlPart);
        fetch(`http://movies-app-siit.herokuapp.com/movies?${secondUrlPart}`)
          .then((res) => res.json())
          .then((json) => {
            this.setState({FoundMovie: json.results})
          });
      };
   
componentDidMount() {
      }     
 
      

checkIfEmpyValues = ()=>{
    let newArray = this.state;

     for(var key in newArray) {
        if(newArray[key] === "" ||
           key === "FoundMovie" ||
           newArray[key] === "http://movies-app-siit.herokuapp.com/movies?") {
         
            delete newArray[key]
        }
    }

    //creating URL
    let secondUrlPart="";
    for (const key in newArray) {
        secondUrlPart = `${secondUrlPart}${key}=${this.state[key]}&`
    }
    
    //get movies based on search fields
    this.handleSearchMovieBy(secondUrlPart)


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
            onSubmit={this.checkIfEmpyValues}
            />
            </div>

            
            
            <h2>All movies:</h2>
            
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
