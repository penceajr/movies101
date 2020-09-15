import React from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { LogIn } from "./Pages/LogIn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CreateAccount } from "./Pages/CreateAccount"
import { Header } from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch >
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/create-account">
              <CreateAccount />
            </Route>
          </Switch>
        
      </div>
    </Router>
  );
}

export default App;


