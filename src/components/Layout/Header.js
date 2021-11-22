import React from 'react';
import headerImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from './HeaderCardButton';

export default function Header() {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Order a Meal</h1>
                <HeaderCardButton/>
            </header>
            <div className={classes["main-image"]}>
                <img src={headerImage} alt="meal"/>
            </div>
        </React.Fragment>
    )
}
