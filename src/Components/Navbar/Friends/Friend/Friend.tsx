import React from "react";
import styles from "./Friend.module.css"

type PropsType = {
    name: string,
    avatar: string
}
export const Friend = (props: PropsType) => {
    return (
        <div className={styles.friend}>
            <img src={props.avatar} alt="friends avatar"/>
            <div><span>
                {props.name}
            </span></div>
        </div>
    )
}