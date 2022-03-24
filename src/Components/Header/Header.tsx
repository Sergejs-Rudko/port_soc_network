import React from "react";
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <div className={styles.header}>
            <span className={styles.spanlol}>HEADER HERE</span>
            <img src="https://www.logodesignlove.com/wp-content/uploads/2022/02/arnaldo-c-castro-logo.jpeg" alt="logo"/>
        </div>
    )
}