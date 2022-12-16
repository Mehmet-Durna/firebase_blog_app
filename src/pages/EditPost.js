import React, {useContext, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {PostContext} from "../context/PostContext";
import { doc, updateDoc} from "firebase/firestore";
import { db} from "../auth/firebase";


function EditPost() {


    const params = useParams();
    const {getOnePost} = useContext(PostContext)
    const post = getOnePost(params.id)
    const navigate = useNavigate();
    const [updatedPost,setUpdatedPost]=useState(post);




    const editCurrentPost = async (postId,postImage,title,postText) => {
        const postDoc = doc(db, "posts", postId);
        await updateDoc(postDoc, {
            postImage:postImage,
            title:title,
            postText:postText,
        });
        navigate("/")
    };




    return (

        <div className="editPostPage">
            <h5>Edit Sayfasi</h5>
            <div className="container">
                <h1>{post?.title}</h1>

                <div className="inputGp" >
                    <label> Image Url</label>
                    <input
                        value={updatedPost.postImage}
                        onChange={(e)=> setUpdatedPost({...updatedPost, postImage:e.target.value})}
                        name="postImage"
                    />
                </div>
                <div className="inputGp" >
                    <label> Title:</label>
                    <input
                        value={updatedPost.title}
                        onChange={(e)=> setUpdatedPost({...updatedPost, title:e.target.value})}
                        name="title"
                    />
                </div>

                <div className="inputGp">
                    <label> Post:</label>
                    <textarea
                        value={updatedPost.postText}
                        onChange={(e)=> setUpdatedPost({...updatedPost, postText:e.target.value})}
                    />
                </div>

                <button onClick={()=>editCurrentPost(post.id,updatedPost.postImage,updatedPost.title,updatedPost.postText)}> Submit Post</button>
            </div>
        </div>
    );
}

export default EditPost;