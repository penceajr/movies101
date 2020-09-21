import React from "react"
import { InputBar } from "../components/Header/Input"
import "./MovieDetails.css"


export class MovieDetailsPage extends React.Component {
    state = {
          UserState: false
        }   

componentDidMount(){
    this.handleUserState()
    console.log(this.props.location);
    const [search,id] = this.props.location.search.split("=");  
    console.log(this.props.location);
    console.log(search, id)   
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
            <div className="Poster-Container">
                <img src="" alt="poster" className="poster-img"></img>
            </div>
            <div className="MovieInformationContainer">
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="Title" type="text" placeholder="Movie Title"/>
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="Year" type="text" placeholder="Year"/>
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="ImageURL" type="text" placeholder="ImageURL"/>
                <InputBar  
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="Released" type="text" placeholder="Released"/>
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="Runtime" type="text" placeholder="Runtime"/>
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="Genre" type="text" placeholder="Genre"/>
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="Director" type="text" placeholder="Director"/>
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="Actors" type="text" placeholder="Actors"/>
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="Plot" type="text" placeholder="Plot"/>
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="Country" type="text" placeholder="Country"/>
                <InputBar 
                LabelcssClass="MovieInformationContainer-label" 
                InputcssClass={"MovieInformationContainer-input" + (this.state.UserState ? " show" : " hidden")} 
                label="imdbRating" type="text" placeholder="imdbRating"/>
            </div>


        </div>
    )}
}