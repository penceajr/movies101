import React from "react"
import movieGlasses from "./movieglasses.svg"
import "./LogInBody.css"
import { Button } from "../../components/Header/NavButtons/Button"
import { InputBar } from "../../components/Header/Input"
import { Link, Redirect } from "react-router-dom"


export class LogInBody extends React.Component{
   state = {
      username: '', 
      password: '',
      redirect: false
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
        } else{
          if(json.accessToken !== undefined) 
              {localStorage.setItem("accessToken", json.accessToken);
              this.setState({
                redirect: true
              })
            window.location.reload()
            }
      }});
  }

    render(){
      const { redirect } = this.state;
      if(redirect){
          return <Redirect to="/"/>
      }
        return (
          <div className="LogInBody" >
            <img src={movieGlasses} alt="glasses" className="movie-glasses"></img>
            <div className="Inputs-Container">
              <InputBar  
                label="UserName" 
                type="text"
                InputcssClass="user-container-input" 
                LabelcssClass="user-container-label"
                placeholder="Type your username" 
                value={this.state.value}
                onChangeValue={this.handleChangeUsername}
                />
              
              <InputBar 
                label="Password" 
                type="password" 
                InputcssClass="pass-container-input"
                LabelcssClass="pass-container-label"
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