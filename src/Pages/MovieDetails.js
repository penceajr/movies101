import React from "react"
import { Link } from "react-router-dom"
import "./MovieDetails.css"


export class MovieDetailsPage extends React.Component {
    state = { 
          UserState: false,
          MovieInformation: {},
          EditButtonState: false,
          MovieID: "",
          redirect: false
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
    const [search ,id ] = this.props.location.search.split("=");  
    this.getMovieInformation(id)
}

handleUserState = () =>{
    if(localStorage.getItem("accessToken")){
        this.setState({
            UserState: true
        })
    }
}

handleDeleteButton = ()=>{
    fetch(`https://movies-app-siit.herokuapp.com/movies/${this.state.MovieID}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "X-Auth-Token": localStorage.getItem("accessToken")
                },
          })
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              localStorage.removeItem("bestRatedMovies");
              window.location.reload();
            });
}
renderEditStateIfUserLoggedIn = ()=>{
        if (localStorage.getItem("accessToken")) { 
            return(
            <div>   
                {this.handleRenderingButtons()}
            </div>
            )}
}
handleEditButton = () => {
    this.setState({EditButtonState:true})
    this.handleUserState()
}
handleCancelButton = () =>{
    this.setState({EditButtonState: false, UserState:false})
}
handleSaveButton = () => {
    fetch(`https://movies-app-siit.herokuapp.com/movies/${this.state.MovieID}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        Poster: "Stefan cel Mare",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
}
handleRenderingButtons = () => {
    if(!this.state.EditButtonState){
      return (
      <div>
      <button onClick={this.handleEditButton}>Edit</button>
      <Link to="/">
      <button onClick={this.handleDeleteButton}>Delete</button>
      </Link>
      </div>
      )
    } else{
       return (
       <div>
       <button onClick={this.handleSaveButton}>Save</button>
       <button onClick={this.handleCancelButton}>Cancel</button>
       </div>
       )
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
                <div className="edit-and-delete-buttons">
                     {this.renderEditStateIfUserLoggedIn()}
                 </div>
                <div className="MovieInformationContainer">
                    
                    <div className="title-container">
                        
                         <p className="MovieInformationContainer-label">Title: {(this.state.UserState ? "" : this.state.MovieInformation.Title)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div> 

                    <div className="year-container">  
                        <p className="MovieInformationContainer-label">Year: {(this.state.UserState ? "" : this.state.MovieInformation.Year)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div> 

                    <div className="imageURL-container">
                        <p className={`MovieInformationContainer-label " ${(this.state.UserState ? " show" : ' hidden')}`}>
                            Image URL: {(this.state.UserState ? "" : this.state.MovieInformation.Poster)}
                        <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div> 

                    <div className="released-container"> 
                        <p className="MovieInformationContainer-label">Released: {(this.state.UserState ? "" : this.state.MovieInformation.Released)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div>

                    <div className="runtime-container">
                        <p className="MovieInformationContainer-label">Runtime: {(this.state.UserState ? "" : this.state.MovieInformation.Runtime)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div>
                    <div className="genre-container">
                        <p className="MovieInformationContainer-label">Genre: {(this.state.UserState ? "" : this.state.MovieInformation.Genre)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div>

                    <div className="director-container">
                        <p className="MovieInformationContainer-label">Director: {(this.state.UserState ? "" : this.state.MovieInformation.Director)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div>

                    <div className="actors-container">
                        <p className="MovieInformationContainer-label">Actors: {(this.state.UserState ? "" : this.state.MovieInformation.Actors)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div>

                    <div className="plot-container">
                        <p className="MovieInformationContainer-label">Plot: {(this.state.UserState ? "" : this.state.MovieInformation.Plot)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div>

                    <div className="country-container">
                        <p className="MovieInformationContainer-label">Country: {(this.state.UserState ? "" : this.state.MovieInformation.Country)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div>

                    <div className="imdbRating-container">
                        <p className="MovieInformationContainer-label">imdbRating: {(this.state.UserState ? "" : this.state.MovieInformation.imdbRating)}
                             <input className={"MovieInformationContainer-input"+(this.state.UserState ? " show" : ' hidden')}>
                            </input>
                        </p>
                    </div>
            </div>
        </div>

        </div>
    )}
}