import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {profileReducer} from "./reducers/profileReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";
import {usersReducer} from "./reducers/usersReducer";

const rootReducer = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    navbar : sideBarReducer,
    usersPage : usersReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
