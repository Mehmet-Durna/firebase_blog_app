import React, {useContext, useEffect} from "react";
import Post from "../components/Post";
import {PostContext} from "../context/PostContext";

function Main() {
    const {postLists,getPosts} = useContext(PostContext);

    useEffect(() => {
        getPosts();
    },[]);


    return (
        <div className="container">
            <div className="row">

            {postLists?.map((post) => {
                return (
                    <Post post={post} key={post.id}/>
                );
            })}

            </div>
        </div>
    );
}

export default Main;
