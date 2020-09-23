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
    if (localStorage.getItem("accessToken")) {
        this.setState({UserState: true})
    }
}

checkIfUserLoggedIn = () => {
        if (localStorage.getItem("accessToken")) {
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