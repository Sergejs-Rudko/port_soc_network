import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <img className={styles.personal_wallpaper} src="https://cdn.wallpapersafari.com/97/88/RZ0hIC.jpg"
                 alt="personal_wallpaper"/>
            <div>avatar + description</div>
            <MyPosts/>
        </div>
    )
}