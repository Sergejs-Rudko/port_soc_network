import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>add post</button>
            <Post message={`First post yo!`}/>
            <Post message={`Second post yo!`}/>
        </div>
    )
}