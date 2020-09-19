import React from "react";

import "./Button.css";

export function Button(props) {
    return <button className={props.cssClass} onClick={props.onSubmit}>{props.label}</button>;
}