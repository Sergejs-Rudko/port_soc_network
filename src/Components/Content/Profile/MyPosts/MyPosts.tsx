import React from "react";
import {Post} from "./Post/Post";
import {PostDataType} from "../../../../index";

type PropsType = {
    postData: PostDataType
}

export const MyPosts = (props: PropsType) => {
    return (
        <div>
            <textarea></textarea>
            <button>add post</button>
            {
                props.postData.map((p) => <Post
                    message={p.message}
                    key={p.id}
                    likesCount={p.likesCount}/>)
            }
        </div>
    )
}