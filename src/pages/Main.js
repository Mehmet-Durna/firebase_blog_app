import React, {useContext, useEffect} from "react";
import Post from "../components/Post";
import {PostContext} from "../context/PostContext";

function Main() {
    const {postLists,getPosts} = useContext(PostContext);

    useEffect(() => {
        getPosts();
    },[]);


    return (
        <div className="container   ">
            <h1 className="text-center text-danger">Share Your Ideas</h1>
            <div className="row row-cols-1 row-cols-md-2 ">

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
