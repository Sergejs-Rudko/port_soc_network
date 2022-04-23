import React from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    name : string
}
export const DialogItem = React.memo((props : PropsType) => {
    return (
        <div className={styles.dialog_item}>
            <NavLink to={`/dialogs/1`}>{props.name}</NavLink>
        </div>
    )
})