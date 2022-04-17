import React from "react";
import {Friend} from "./Friend/Friend";
import {FriendType} from "../../../fakeRedux/state";
import styles from "./Friends.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../fakeRedux/store";


export const Friends = () => {
    const friends = useSelector<AppRootStateType, FriendType []>(state => state.navbar.friends)
    return (
        <div className={styles.friends}>
            {
                friends.map((f) => <Friend avatar={f.avatar} name={f.name} key={f.name}/>)
            }
        </div>
    )
}