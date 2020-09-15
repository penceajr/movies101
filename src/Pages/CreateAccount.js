import React from "react" ;
import "./CreateAccount.css";

import { CreateAccountBody } from "./CreateAccountComponents/CreateAccountBody";

export function CreateAccount(props) {
    return (
        <div className="background-image">
        <div className="CreateAccount-container">   
            <CreateAccountBody />
        </div>
        </div>
        )
    }
