import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../../index";

type PropsType = {
    dialogsData: DialogsDataType
    messagesData: MessagesDataType
}

export const Dialogs = (props: PropsType) => {


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_items}>
                {
                    props.dialogsData.map((d) => <DialogItem name={d.name} key={d.id}/>)
                }
            </div>
            <div className={styles.messages}>
                {
                    props.messagesData.map((m) => <Message message={m.message} key={m.id}/>)
                }
            </div>
        </div>
    )
}