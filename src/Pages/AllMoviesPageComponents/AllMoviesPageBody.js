import React from "react";
import MovieCard from "../HomePage Components/MovieCard/MovieCard";
import {Button} from "../../components/Header/NavButtons/Button";

import "./AllMoviesPageBody.css"

export class AllMoviesPageBody extends React.Component{
    
    state = {
       paginationData: [],
       movieData: [],
       URL: "http://movies-app-siit.herokuapp.com/movies?take=10&skip=0",
       LeftPage: "",
       CurrentPage: "",
       RightPage: "",
       nrOfPages: "",
    }

    handleGetAllMovies = () => { 
        fetch(this.state.URL)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
              movieData: json.results, 
              pagination: json.pagination,
              RightPage: json.pagination.links.next,
              CurrentPage: json.pagination.currentPage,
              nrOfPages: json.pagination.numberOfPages,
            });
        });
    }
    componentDidMount(){
        this.handleGetAllMovies();
    }
   

    handleShowPagination = (event) => {
        if(event.target.className === "right-page-button"){
            fetch(this.state.RightPage)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
              movieData: json.results, 
              pagination: json.pagination, 
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
                movieData: json.results,
                pagination: json.pagination,
                RightPage: json.pagination.links.next,
                LeftPage: json.pagination.links.prev,
                CurrentPage: json.pagination.currentPage
            })
        })
     }
    }

    render (){
        return (
        <div className="all-movies-page-body">
            <div  className= "all-movies-title-container">
                <h1 className="all-movies-title">All Movies:</h1>
            </div>
            <div className="all-movies-cards">
                {this.state.movieData.map((movie, index) => (
                <MovieCard  
                    className="all-movies-movie-card" 
                    key={index} 
                    Title={movie.Title} 
                    Poster={movie.Poster}
                    imdbRating={movie.imdbRating}
                    id={movie._id}
                />  
                ))
            }
            </div>
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
            </div>
            
        </div> 
        )
    }

        
}