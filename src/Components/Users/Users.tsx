import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../fakeRedux/store";
import {setUsersAC, UserType} from "../../fakeRedux/reducers/usersReducer";
import {User} from "./User/User";

export const Users = () => {
    const dispatch = useDispatch()
    let usersArr = [
        {id: "123", name: "Zhora", status: "hey hey", location: {country: "LV", city: "Rezekne"}, followed: true},
        {id: "1234", name: "Dimon", status: "yo yo", location: {country: "RUS", city: "Moscow"}, followed: false},
    ] as Array<UserType>

    const users = useSelector<AppRootStateType, Array<UserType>>(state => state.usersPage.users)
    const setUsers = () => {
        dispatch(setUsersAC(usersArr))
    }

    if (users.length === 0) {
        setUsers()
    }



    return (
        <div>
            {
                users.map((u) => <User key={u.id} user={u}/>)
            }
        </div>
    )
}