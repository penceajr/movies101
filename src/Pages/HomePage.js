import React from "react";

import "./HomePage.css";
import {Header} from "../components/Header/Header.js";
import {HomePageBody} from "../Pages/HomePage Components/HomePageBody";
import { Footer } from "./HomePage Components/Footer";

export function HomePage() {
    return (
    <div className="home-page">
        <Header />
    <div className="home-page-container">   
        <HomePageBody />
    <div className="home-page-footer">
        <Footer />
    </div>    
    </div>
    </div>
    )
}
