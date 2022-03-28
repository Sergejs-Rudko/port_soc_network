import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {PostDataType} from "../../../index";

type PropsType = {
    postData: PostDataType
}

export const Profile = (props: PropsType) => {
    return (
        <div className={styles.profile}>
            <img className={styles.personal_wallpaper} src="https://cdn.wallpapersafari.com/97/88/RZ0hIC.jpg"
                 alt="personal_wallpaper"/>
            <div>avatar + description</div>
            <MyPosts postData={props.postData}/>
        </div>
    )
}