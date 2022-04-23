import React from "react";
import {followAC, unfollowAC, UserType} from "../../../fakeRedux/reducers/usersReducer";
import {useDispatch} from "react-redux";

export const User = React.memo((props: PropsType) => {
    const dispatch = useDispatch()

    const followUser = (id: string) => {
        dispatch(followAC(id))
    }

    const unfollowUser = (id: string) => {
        dispatch(unfollowAC(id))
    }

    return (
        <div>
            <div>user avatar</div>
            <div>{props.user.name}</div>
            <div>{props.user.status}</div>
            <div>{props.user.location.country}</div>
            <div>{props.user.location.city}</div>
            {
                props.user.followed ?
                    <button onClick={() => unfollowUser(props.user.id)}>UNFOLLOW</button> :
                    <button onClick={() => followUser(props.user.id)}>FOLLOW</button>
            }
        </div>
    )
})

type PropsType = {
    user: UserType
}