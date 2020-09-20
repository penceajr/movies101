import React from "react";
import { withRouter } from "react-router-dom";
import "./MovieCard.css";
import star from "./star.png"

class MovieCard extends React.Component {

    handleOnClick = () => {
        this.props.history.push(`/MovieDetails?movieId=${this.props.id}`)
}
   
   
    render(){ 
    return (
         <div className="movie-card" onClick={this.handleOnClick}>
            <div className="title-container">
                <h5 className="movie-card-title">{this.props.Title}</h5>
                <img src={star} alt="star" className="rating-star" />
                <p className="movie-card-imdb-Rating">{this.props.imdbRating}</p>    
            </div>

            <img src={this.props.Poster} alt="img" className="movie-card-img"/>
        </div>
    );     
}
}
export default withRouter(MovieCard)