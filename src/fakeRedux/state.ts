import {DialogsDataType, MessagesDataType, PostDataType} from "../index";

export let state: StateType = {
    dialogsPage: {
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
    },
    profilePage: {
        postData: [
            {id: 1, message: "kek bur lol", likesCount: 1},
            {id: 2, message: "yo", likesCount: 2},
            {id: 3, message: "no", likesCount: 11},
            {id: 4, message: "arrr!", likesCount: 3},
        ]
    },
    sideBar: {
        friends: [{
            avatar: "https://fsd.multiurok.ru/viewImage.php?image=http://redcat7.ru/wp-content/uploads/2015/05/evil-cats-5-480x299.jpg",
            name: "kekbur"
        },
            {avatar: "https://kaifolog.ru/uploads/posts/2015-09/1443418074_012.jpg", name: "Dimich"},
            {avatar: "http://img-fotki.yandex.ru/get/5005/kot-de-azur.25/0_4b330_99c677ac_orig.jpg", name: "zhora"}]
    }
}

export type StateType = {
    dialogsPage: {
        dialogsData: DialogsDataType
        messagesData: MessagesDataType
    }
    profilePage: {
        postData: PostDataType
    }
    sideBar: {
        friends: FriendType[]
    }
}

export type FriendType = {
    name: string
    avatar: string
}