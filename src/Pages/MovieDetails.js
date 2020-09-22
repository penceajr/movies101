import React from "react"
import { InputBar } from "../components/Header/Input"
import "./MovieDetails.css"


export class MovieDetailsPage extends React.Component {
    state = { 
          UserState: false,
          MovieInformation: {}
        }   

getMovieInformation = (id) =>{
    fetch(`http://movies-app-siit.herokuapp.com/movies/${id}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      this.setState({
          MovieInformation: json
        });
    });

}

componentDidMount(){
    this.handleUserState()
    const [search ,id ] = this.props.location.search.split("=");  
    console.log(search);
    this.getMovieInformation(id)
}

handleUserState = () =>{
    if(localStorage.getItem("accessToken")){
        this.setState({
            UserState: true
        })
    }
}

    render(){
        
       return ( 
        <div className="MovieDetailsPage">
            <div className="page-title-container">
                <h2 className="title">Movie details:</h2>
            </div>
            <div className="page-body-container">
                <div className="Poster-Container">
                    <img src={this.state.MovieInformation.Poster} alt="poster" className="poster-img"></img>
                </div>
                <div className="MovieInformationContainer">
                    <div className="title-container">
                        <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="Title" type="text" placeholder="Movie Title"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Title}</p>
                    </div> 

                    <div className="year-container">  
                        <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="Year" type="text" placeholder="Year"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Year}</p>
                    </div> 

                    <div className="imageURL-container">
                    <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="ImageURL" type="text" placeholder="ImageURL"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Poster}</p>
                    </div> 

                    <div className="released-container"> 
                        <InputBar  
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="Released" type="text" placeholder="Released"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Released}</p>
                    </div>

                    <div className="runtime-container">
                        <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="Runtime" type="text" placeholder="Runtime"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Runtime}</p>
                    </div>
                    <div className="genre-container">
                        <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="Genre" type="text" placeholder="Genre"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Genre}</p>
                    </div>

                    <div className="director-container">
                        <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="Director" type="text" placeholder="Director"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Director}</p>
                    </div>

                    <div className="actors-container">
                        <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="Actors" type="text" placeholder="Actors"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Actors}</p>
                    </div>

                    <div className="plot-container">
                        <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="Plot" type="text" placeholder="Plot"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Plot}</p>
                    </div>

                    <div className="country-container">
                        <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="Country" type="text" placeholder="Country"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.Country}</p>
                    </div>

                    <div className="imdbRating-container">
                        <InputBar 
                        LabelcssClass="MovieInformationContainer-label" 
                        InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                        label="imdbRating" type="text" placeholder="imdbRating"/>
                        <p className={(!this.state.UserState ? " show" : " hidden")}>{this.state.MovieInformation.imdbRating}</p>
                    </div>
            </div>
        </div>

        </div>
    )}
}