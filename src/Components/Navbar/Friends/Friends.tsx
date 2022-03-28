import React from "react";
import {Friend} from "./Friend/Friend";
import {FriendType} from "../../../fakeRedux/state";
import styles from "./Friends.module.css"

type PropsType = {
    friends: FriendType[]
}

export const Friends = (props: PropsType) => {
    return (
        <div className={styles.friends}>
            {
                props.friends.map((f) => <Friend avatar={f.avatar} name={f.name}/>)
            }
        </div>
    )
}