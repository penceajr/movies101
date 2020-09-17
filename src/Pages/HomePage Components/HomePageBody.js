import React from "react";
import "./HomePageBody.css";
import { MovieCard } from "./MovieCard/MovieCard";

export class HomePagebody extends React.Component{

    state ={ 
        BestRatedMovies: [],
        TopRatedMovie: {}
    }
     
    getAllMovies = () => {
        if(localStorage.getItem("AllMovies")){
            
         let results = JSON.parse(localStorage.getItem("AllMovies"))
            const BestRatedMovies = results
            .filter(movie => movie.imdbRating > 8.4)
            .sort(function(firstMovie, NextMovie){
                return NextMovie.imdbRating - firstMovie.imdbRating
            })
            
                this.setState({
                TopRatedMovie: BestRatedMovies[0],
                BestRatedMovies: BestRatedMovies.slice(1)
                 
            })  
           }  
           else{
         fetch("https://movies-app-siit.herokuapp.com/movies?take=99999999&skip=0")
          .then((res) => res.json())
          .then((json) => {
            
           
            
            console.log(json.results);
            this.setState({
                BestRatedMovies: json.results
               .filter(movie => movie.imdbRating > 8.4)
               .sort(function(firstMovie, NextMovie){
                   return NextMovie.imdbRating - firstMovie.imdbRating})
                 
            })
            
            localStorage.setItem("AllMovies", JSON.stringify(json.results))

            this.setState({
                TopRatedMovie: this.state.BestRatedMovies[0],
                
            })

            this.state.BestRatedMovies.shift()

            this.setState({
                BestRatedMovies: this.state.BestRatedMovies
            })
           
        
          });
        }
      };

componentDidMount(){
    this.getAllMovies();
    
      }
    
    render(){
        return (
           <div className="HomePageBody"> 
            <div className="top-rated-movies">
                <h2>TOP RATED MOVIES</h2>
                <MovieCard 
                    Title={this.state.TopRatedMovie.Title}
                    imdbRating={this.state.TopRatedMovie.imdbRating}
                    Poster={this.state.TopRatedMovie.Poster}
                />
            </div>     
        
            <div className="best-movies">
              {this.state.BestRatedMovies.map((element, index)=>(
                  <MovieCard 
                    key={index}
                    Title={element.Title}
                    imdbRating={element.imdbRating}
                    Poster={element.Poster}
                  />
                  ))}
                

            </div>
        </div>
        )
    }
}