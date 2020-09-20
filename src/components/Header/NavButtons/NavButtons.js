import React from "react";
import { Link } from "react-router-dom";
import {Button} from "./Button";
import "./Button.css"

export class NavButtons extends React.Component {
  
handleLogOut = ()=>{
    fetch("https://movies-app-siit.herokuapp.com/auth/logout", {
      method: "GET",
      headers: {
        "X-Auth-Token": localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then(() => {
        localStorage.removeItem("accessToken")
      }).catch(json => {
          if (json.message === "User logged out successfully" ) {
          }else {
              alert("Something bad happen when trying to Log you out, please retry!")
          }
      });
   }



checkIfUserLoggedIn = () => {
    if (!localStorage.getItem("accessToken")) {
       return( 
        <div className="navigation-buttons">
        <Link to="/login">
        <Button cssClass="nav-button" label="SIGN IN" /> 
        </Link>
        </div>
        )
    } else {
        return(
          <div className="navigation-buttons">
            <button cssClass="LogOut-button" onClick={this.handleLogOut}>Log Out</button>
            </div>
        )
    }
 }

 render(){
    return (
    <div className="navigation-buttons">
     {this.checkIfUserLoggedIn()}
    </div>
    );
}
}