import React from "react";

import "./HomePageBody.css";
import { MovieCard } from "./MovieCard/MovieCard";

export class HomePagebody extends React.Component{

    state ={ 
        BestRatedMovies: [],
    }
     
    getAllMovies = () => {
        fetch("https://movies-app-siit.herokuapp.com/movies?take=99999999&skip=0")
          .then((res) => res.json())
          .then((json) => {
            console.log(json.results);
           if(false){}
           else{ 
            this.setState({
                BestRatedMovies: json.results
               .filter(movie => movie.imdbRating > 8)
               .sort(function(firstMovie, NextMovie){
                   return NextMovie.imdbRating - firstMovie.imdbRating
               })    
            })
        }
          });
      };

componentDidMount(){
    this.getAllMovies();
    console.log(this.state.BestRatedMovies);
      }
    
    render(){
        return (
           <div className="HomePageBody"> 
            <div className="top-rated-movies">
                <h2>TOP RATED MOVIES</h2>
                <MovieCard />
            </div>     
        
            <div className="best-movies">
                <MovieCard />

            </div>
        </div>
        )
    }
}