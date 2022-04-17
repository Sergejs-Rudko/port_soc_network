const initialState: DialogsPageType = {
    dialogsData: [
        {id: 1, name: "Dimich"},
        {id: 2, name: "Zhora"},
        {id: 3, name: "Ignat"},
    ],
    messagesData: [
        {id: 1, message: "hey"},
        {id: 2, message: "YO"},
        {id: 3, message: "BEAAAST from array"},
    ],
    newMessageText : ""
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: UnionActionType): DialogsPageType => {
    switch (action.type) {
        case "ADD_MESSAGE": {
            let newMessage = {id: action.message.id, message: action.message.messageText}
            return {...state, messagesData: [...state.messagesData, newMessage]}
        }
        case "UPDATE_NEW_MESSAGE_BODY": {
            return {...state, newMessageText : action.text}
        }
        default :
            return state
    }
}

export type MessageDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
type DialogsPageType = {
    dialogsData: DialogsDataType []
    messagesData: MessageDataType []
    newMessageText : string
}

//ACTION CREATORS_______________________________________________________________________________________________________
export const addMessageAC = (messageText: string) => ({
    type: "ADD_MESSAGE",
    message: {
        messageText,
        id: initialState.messagesData.length + 1
    }
}as const)

export const updateNewMessageBodyAC = (text : string) => ({
    type : "UPDATE_NEW_MESSAGE_BODY",
    text
}as const)

//ACTION TYPES__________________________________________________________________________________________________________
type UnionActionType = AddMessageActionType | UpdateNewMessageBodyActionType
type AddMessageActionType = ReturnType<typeof addMessageAC>
type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>

