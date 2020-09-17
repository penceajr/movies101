import React from "react";
import { Footer } from "./HomePage Components/Footer";
import { HomePagebody } from "./HomePage Components/HomePageBody";


import "./HomePage.css";


export function HomePage () {
    return (
      <div className="home-page">
         <HomePagebody />
         <Footer />
    </div>)
}
