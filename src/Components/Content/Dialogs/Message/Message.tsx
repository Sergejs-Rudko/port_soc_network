import React from "react";
import styles from "../Dialogs.module.css";

type PropsType = {
    message: string
}

export const Message = (props: PropsType) => {
    return (
        <div>
            <div className={styles.message}>{props.message}</div>
        </div>
    )
}