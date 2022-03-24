import React from "react";
import styles from "./Post.module.css"

export const Post = (props : PropsType) => {
    return (
        <div>
            <img className={styles.user_avatar} src="https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf" alt="user_p"/>
            <span>{props.message}</span>
        </div>
    )
}

//TYPES

type PropsType = {
    message : string
}