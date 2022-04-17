import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {profileReducer} from "./reducers/profileReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";

const rootReducer = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    navbar : sideBarReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
