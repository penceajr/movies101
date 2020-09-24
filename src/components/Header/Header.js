import React from "react" ;
import "./Header.css";
import { AppLogo } from "./AppLogo";
import { AllMovies } from "./AllMovies";
import { MovieSearch }  from "./MovieSearch";
import { AddMovie } from "./AddMovie";
import { NavButtons } from "./NavButtons/NavButtons";



export class Header extends React.Component {

state={
    UserState: false
}

componentDidMount(){
    if (localStorage.getItem("accessToken") && localStorage.getItem("accessToken") !== undefined) {
        this.setState({UserState: true})
    }
}

checkIfUserLoggedIn = () => {
        if (this.state.UserState) {
           return(<AddMovie />)
        } 
     }
   render(){ 
    return (
    <div className = "header">
        <AppLogo />
        <AllMovies />
        <MovieSearch />
        {this.checkIfUserLoggedIn()}
        <NavButtons />
    </div>
   )}
}