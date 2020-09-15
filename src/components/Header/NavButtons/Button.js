import React from "react";

import "./Button.css";

export function Button(props) {
    return <button className="nav-button">{props.label}</button>;
}