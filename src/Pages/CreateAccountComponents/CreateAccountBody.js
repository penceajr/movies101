import React from "react"
import PopSuc from "./PopSuc.png"
import "./CreateAccountBody.css"
import { InputBar } from "../../components/Header/Input"
import { Button } from "../../components/Header/NavButtons/Button";
import { Redirect } from "react-router-dom"

export class CreateAccountBody extends React.Component{   

  state = {
    username: '',
    password:'',
    retypepassword:'',
    alertCssClass: "alertCssClass",
    redirect: false
  };


handleChangeUsername = event => this.setState({username: event.target.value}) 

handleChangePassword = event => this.setState({password: event.target.value})

handleChangeRetypePassword = event => this.setState({retypepassword: event.target.value})

handleCreateAccount = ()=> {
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
         this.setState({
          redirect: true
        })
        window.location.reload()
         
        }
      });
  }
}


  render(){ 
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/"/>
    }
  
    return (
            <div className="CreateAccountBody" >
                <img src={PopSuc} alt="popsuc" className="pop-suc"></img>
                <div className="Inputs-Container">
                <InputBar
                  LabelcssClass="user-createAccount-label"
                  InputcssClass="user-createAccount-input" 
                  label="UserName" 
                  type="text" 
                  placeholder="Type your username" 
                  value={this.state.value}
                  onChangeValue={this.handleChangeUsername}
                  />
                
                <InputBar 
                  LabelcssClass="pass-createAccount-label"
                  InputcssClass="pass-createAccount-input"
                  label="Password" 
                  type="password" 
                  placeholder="Type your password"
                  value={this.state.value}
                  onChangeValue={this.handleChangePassword} 
                  />

                <InputBar 
                  LabelcssClass="retype-createAccount-label"
                  InputcssClass="retype-createAccount-input"
                  label="Retype Password" 
                  type="password" 
                  placeholder="Please retype your password"
                  value={this.state.value}
                  onChangeValue={this.handleChangeRetypePassword} 
                  />
                
                <div className="create-account-button-container">  
                    <Button 
                      cssClass="createAccountButton" 
                      label="Create Account"
                      onSubmit={this.handleCreateAccount}  
                      />                    
                </div>
              </div>   
            </div>

        );
  }
}