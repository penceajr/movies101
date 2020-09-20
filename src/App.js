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
import { SearchMoviePage } from "./Pages/SearchMoviePage";
import { Footer } from "./components/Header/Footer";
import { MovieDetailsPage } from "./Pages/MovieDetails";


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
            <Route path="/MovieSearch">
              <SearchMoviePage />
            </Route>
            <Route component={MovieDetailsPage} path="/MovieDetails"/>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


