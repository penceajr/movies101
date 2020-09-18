import React from "react";
import { Link } from "react-router-dom";
import {Button} from "./Button";

export function NavButtons() {
    return (
    <div className="navigation-buttons">
     <Link to="/login">
        <Button className="nav-button" label="SIGN IN" /> 
    </Link>
    </div>
    );
}