const initialState: UsersPageStateType = {
    users: [] as Array<UserType>
}

export const usersReducer = (state: UsersPageStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET_USERS" : {
            return {...state, users: [...state.users, ...action.users]}
        }
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map((u) => u.id === action.id ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map((u) => u.id === action.id ? {...u, followed: false} : u)
            }
        }
        default : {
            return state
        }
    }
}

//ACTION CREATORS_______________________________________________________________________________________________________
export const setUsersAC = (users: Array<UserType>) => ({
    type: "SET_USERS",
    users
} as const)

export const followAC = (id: string) => ({
    type: "FOLLOW",
    id
} as const)

export const unfollowAC = (id: string) => ({
    type: "UNFOLLOW",
    id
} as const)

//ACTION TYPES__________________________________________________________________________________________________________
type ActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType

type SetUsersActionType = ReturnType<typeof setUsersAC>
type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>

//TYPES_________________________________________________________________________________________________________________
export type UsersPageStateType = {
    users: UserType[]
}

type LocationType = {
    country: string
    city: string
}

export type UserType = {
    id: string
    name: string
    status: string
    location: LocationType
    followed: boolean
}