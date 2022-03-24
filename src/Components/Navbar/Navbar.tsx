import React from "react";
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div>
                <NavLink to={"/profile"}
                         style={(params) => {
                             return {color: params.isActive ? "lime" : "white", textDecoration: "none"}
                         }}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={"/dialogs"}
                         style={(params) => {
                             return {color: params.isActive ? "lime" : "white", textDecoration: "none"}
                         }}>Messages</NavLink>
            </div>
            <div className={styles.item}><a href="#">News</a></div>
            <div className={styles.item}><a href="#">Music</a></div>
            <div className={styles.item}><a href="#">Setting</a></div>
        </nav>
    )
}