import React, {ChangeEvent, useState} from "react";
import {Post} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {addPostAC, PostDataType} from "../../../../fakeRedux/reducers/profileReducer";
import {AppRootStateType} from "../../../../fakeRedux/store";

export const MyPosts = () => {
    const dispatch = useDispatch()
    let postData = useSelector<AppRootStateType, Array<PostDataType>>(state => state.profilePage.postData)
    const [newPostText, setNewPostText] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostText(e.currentTarget.value)
    }

    const addPost = () => {
        dispatch(addPostAC(newPostText))
        setNewPostText("")
    }

    return (
        <div>
            <textarea value={newPostText} onChange={onChangeHandler}></textarea>
            <button onClick={addPost}>add post</button>
            {
                postData.map((p) => <Post
                    message={p.message}
                    key={p.id}
                    likesCount={p.likesCount}/>)
            }
        </div>
    )
}