import React from "react";

import "./HomePageBody.css";
import { MovieCard } from "./MovieCard/MovieCard";

export class body extends React.Component{

    state ={ 

        movies: [],
    }
     
    getAllMovies = () => {
        fetch("https://movies-app-siit.herokuapp.com/movies?take=99999999")
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
          });
      };
    
    render(getAllMovies){
        return (
            <div className="top-rated-movies">
                <h2>TOP RATED MOVIES</h2>
                <MovieCard />
            </div>     
        
            <div className="best-movies">
                <MovieCard />

            </div>
        );
    }
}