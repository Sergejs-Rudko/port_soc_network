import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {
    addMessageAC,
    DialogsDataType, MessageDataType,
    updateNewMessageBodyAC
} from "../../../fakeRedux/reducers/dialogsReducer";
import {AppRootStateType} from "../../../fakeRedux/store";


// type PropsType = {
//     dialogsData: DialogsDataType
//     messagesData: MessagesDataType
// }


export const Dialogs = () => {
    const dispatch = useDispatch()
    let message = useSelector<AppRootStateType, string>(state => state.dialogsPage.newMessageText)
    const dialogsData = useSelector<AppRootStateType, DialogsDataType []>(state => state.dialogsPage.dialogsData)
    const messagesData = useSelector<AppRootStateType, MessageDataType[]>(state => state.dialogsPage.messagesData)


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    const addMessage = () => {
        dispatch(addMessageAC(message))
        dispatch(updateNewMessageBodyAC(""))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_items}>
                {
                    dialogsData.map((d) => <DialogItem name={d.name} key={d.id}/>)
                }
            </div>
            <div className={styles.messages}>
                {
                    messagesData.map((m) => <Message message={m.message} key={m.id}/>)
                }
            </div>
            <textarea value={message} onChange={onChangeHandler}></textarea>
            <button onClick={addMessage}>send message</button>
        </div>
    )
}