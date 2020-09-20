import React from "react"
import movieGlasses from "./movieglasses.svg"
import "./LogInBody.css"
import { Button } from "../../components/Header/NavButtons/Button"
import { InputBar } from "../../components/Header/Input"
import { Link } from "react-router-dom"

export class LogInBody extends React.Component{
   state = {
      username: '', 
      password:''
    };
  

  handleChangeUsername = event => this.setState({username: event.target.value}) 

  handleChangePassword = event => this.setState({password: event.target.value})

  handleLogIn = ()=> {
   
    fetch("https://movies-app-siit.herokuapp.com/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message === "Wrong password") {
          alert("Incorrect credentials!!")
        } if (json.message === "User not found") {
          alert("User not found! Join us by creating an account.")
        } 
        localStorage.setItem("accessToken", json.accessToken);
      });
  }

    render(){
        return (
            <div className="LogInBody" >
              <img src={movieGlasses} alt="glasses" className="movie-glasses"></img>
              <div className="Inputs-Container">
                <InputBar  
                  label="UserName" 
                  type="text"
                  InputcssClass="input-container-input" 
                  LabelcssClass="input-container-label"
                  placeholder="Type your username" 
                  value={this.state.value}
                  onChangeValue={this.handleChangeUsername}
                  />
                
                <InputBar 
                  label="Password" 
                  type="password" 
                  InputcssClass="input-container-input"
                  LabelcssClass="input-container-label"
                  placeholder="Type your password"
                  value={this.state.value}
                  onChangeValue={this.handleChangePassword} 
                  />
                
                <div className="buttons-container">  
                <Link to="/create-account">
                    <Button cssClass="create-account-button" label="Create Account"/>
                </Link>    
                    <Button cssClass="log-in-button" label="Log In" onSubmit={this.handleLogIn}/>   
                     
                </div>
              </div>   
            </div>

        );
      }
}