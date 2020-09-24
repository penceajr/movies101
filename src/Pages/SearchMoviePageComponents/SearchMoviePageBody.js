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
            RightPage:"",
            LeftPage:"",
            CurrentPage:"",
            nrOfPages:"",
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
        console.log(secondUrlPart);
        fetch(`http://movies-app-siit.herokuapp.com/movies?${secondUrlPart}take=5`)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
                    FoundMovie: json.results,
                    RightPage: json.pagination.links.next,
                    LeftPage: json.pagination.links.prev,
                    CurrentPage: json.pagination.currentPage,
                    nrOfPages: json.pagination.numberOfPages})
          });
      };
   
componentDidMount() {
      }     
 
      

checkIfEmpyValues = ()=>{
    let newArray = this.state;

     for(var key in newArray) {
        if(newArray[key] === "" ||
           key === "FoundMovie" || key === "RightPage" || key === "LeftPage" || key === "CurrentPage" ||
           key === "nrOfPages" || key === "PaginationNeeded" ||
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

handleShowPagination = (event) => {
        if(event.target.className === "right-page-button"){
            fetch(this.state.RightPage)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({
              FoundMovie: json.results, 
              RightPage: json.pagination.links.next,
              LeftPage: json.pagination.links.prev,
              CurrentPage: json.pagination.currentPage,
            })
        })
        
    } else {
        fetch(this.state.LeftPage)
        .then((res) =>res.json())
        .then((json) => {
              this.setState({
                FoundMovie: json.results,
                RightPage: json.pagination.links.next,
                LeftPage: json.pagination.links.prev,
                CurrentPage: json.pagination.currentPage
            })
        })
     }
    }

createPaginationElements = () =>{
        if (this.state.nrOfPages > 1) {
            return (
                <div className="pagination-container">
                    <Button 
                        cssClass="left-page-button" 
                        label="<<"
                        onSubmit={this.handleShowPagination}   
                    />
                    <Button 
                        cssClass="current-page-button" 
                        label={`${this.state.CurrentPage}/${this.state.nrOfPages}`}   
                    />
                     <Button 
                        cssClass="right-page-button" 
                        label=">>"
                        onSubmit={this.handleShowPagination}
                    />
                </div>)
        }    
}   


    render() { 
       

    return ( 
        <div className="SearchMoviePageBody">
            <div className="search-movie-container">
                <h2 className="search-movie-title">Search a movie by:</h2>
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
            </div>

            <div className="button-container">
                <Button 
                cssClass="searchMoviePage-button" 
                label="Search"
                onSubmit={this.checkIfEmpyValues}
                />
            </div>

            
            <div className="found-movie-container-body">
                <h2 className="movie-found-title">Movie found:</h2>
            
                <div className="Movie-Found-Container">
                    <div className="search-movie-card-container">
                        {this.state.FoundMovie.map((element, index) => (
                            <MovieCard 
                                className="search-movie-card"
                                id={element._id}
                                key={index}
                                Title={element.Title}
                                imdbRating={element.imdbRating}
                                Poster={element.Poster}
                            />    
                            ))
                        }
                    </div>

                    <div className="movie-found-pagination-container">
                    {this.createPaginationElements()}
                    </div>
                 </div>

        </div>
        </div>
        
    );
     }
    }
