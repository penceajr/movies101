import React from "react"
import PopSuc from "./PopSuc.png"
import "./CreateAccountBody.css"
import { InputBar } from "../../components/Header/Input"
import { Button } from "../../components/Header/NavButtons/Button";

export class CreateAccountBody extends React.Component{   

  state = {
    username: '',
    password:'',
    retypepassword:'',
    alertCssClass: "alertCssClass"
  };


handleChangeUsername = event => this.setState({username: event.target.value}) 

handleChangePassword = event => this.setState({password: event.target.value})

handleChangeRetypePassword = event => this.setState({retypepassword: event.target.value})

handleCreateAccount = ()=> {
  console.log("o sa mearga");
  if (this.state.password !== this.state.retypepassword) {
    alert("Password doesn't match!!")

  }else {
      fetch("https://movies-app-siit.herokuapp.com/auth/register", {
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
        console.log(json);
        if (json.message === "Username already existing") {
         alert("Username already existing!! Please go to Log in Page.")
        }else{
         localStorage.setItem("accessToken", json.accessToken);

        }
      });
  }
}


  render(){    
  return (
            <div className="CreateAccountBody" >
                <img src={PopSuc} alt="popsuc" className="pop-suc"></img>
                <div className="Inputs-Container">
                <InputBar 
                  label="UserName" 
                  type="text" 
                  placeholder="Type your username" 
                  value={this.state.value}
                  onChangeValue={this.handleChangeUsername}
                  />
                
                <InputBar 
                  label="Password" 
                  type="password" 
                  placeholder="Type your password"
                  value={this.state.value}
                  onChangeValue={this.handleChangePassword} 
                  />

                <InputBar 
                  label="Retype Password" 
                  type="password" 
                  placeholder="Please retype your password"
                  value={this.state.value}
                  onChangeValue={this.handleChangeRetypePassword} 
                  />
                
                <div className="buttons-container">  
                    <Button 
                      className="create-account-button" 
                      label="Create Account"
                      onSubmit={this.handleCreateAccount}  
                      />                    
                </div>
              </div>   
            </div>

        );
  }
}