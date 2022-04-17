const initialState: NavBarStateType = {
    friends: [{
        avatar: "https://fsd.multiurok.ru/viewImage.php?image=http://redcat7.ru/wp-content/uploads/2015/05/evil-cats-5-480x299.jpg",
        name: "kekbur"
    },
        {avatar: "https://kaifolog.ru/uploads/posts/2015-09/1443418074_012.jpg", name: "Dimich"},
        {avatar: "http://img-fotki.yandex.ru/get/5005/kot-de-azur.25/0_4b330_99c677ac_orig.jpg", name: "zhora"}
    ]

}

export const sideBarReducer = (state: NavBarStateType = initialState, action: any) => {
    return state
}


export type FriendType = {
    avatar: string,
    name: string
}

type NavBarStateType = {
    friends: FriendType []
}