const initialState: ProfilePageType = {
    postData: [
        {id: 1, message: "kek bur lol", likesCount: 1},
        {id: 2, message: "yo", likesCount: 2},
        {id: 3, message: "no", likesCount: 11},
        {id: 4, message: "arrr!", likesCount: 3},
    ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: UnionActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST": {
            const post = {id: action.post.id, message: action.post.message, likesCount: action.post.likesCount}
            return {...state, postData: [post, ...state.postData]}
        }
        default :
            return state
    }
}

//ACTION CREATORS_______________________________________________________________________________________________________
export const addPostAC = (postText: string) => ({
    type: "ADD_POST",
    post: {
        id: initialState.postData.length + 1,
        message: postText,
        likesCount: 0
    } as PostDataType
} as const)

//TYPES_________________________________________________________________________________________________________________
export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {
    postData: PostDataType []
}


//ACTION TYPES _________________________________________________________________________________________________________
type UnionActionType = AddPostActionType
type AddPostActionType = ReturnType<typeof addPostAC>