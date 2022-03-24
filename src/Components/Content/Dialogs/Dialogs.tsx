import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_items}>
                <DialogItem name={"Dimich"}/>
                <DialogItem name={"Zhora"}/>
                <DialogItem name={"Ignat"}/>
            </div>
            <div className={styles.messages}>
                <Message message={"hey"}/>
                <Message message={"YO"}/>
                <Message message={"BEAAAST!!"}/>
            </div>
        </div>
    )
}