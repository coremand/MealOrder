import React from 'react';
import classes from "./Input.module.css";

export default function Input(props) {
    return (
        <div className={classes.input}>
            <label htmFor={props.input.id}>{props.label}</label>
            <input />
        </div>
    )
}
