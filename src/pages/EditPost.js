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
            <h5 className="text-center">Edit Your Post</h5>
            <div className="container">
                <h1 className="text-center text-danger">{post?.title}</h1>
<form>

                <div className="mb-3" >
                    <label  className="form-label"> Image Url</label>
                    <input
                        className="form-control"
                        type="url"
                        value={updatedPost.postImage}
                        onChange={(e)=> setUpdatedPost({...updatedPost, postImage:e.target.value})}
                        name="postImage"
                    />
                    <div id="imageUrlHelp" className="form-text">You need the add your image url.</div>
                </div>

                <div className="mb-3" >

                    <label className="form-label"> Title</label>
                    <input
                        className="form-control"
                        type="text"
                        value={updatedPost.title}
                        onChange={(e)=> setUpdatedPost({...updatedPost, title:e.target.value})}
                        name="title"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Post:</label>
                    <textarea
                        className="form-control"
                        value={updatedPost.postText}
                        onChange={(e)=> setUpdatedPost({...updatedPost, postText:e.target.value})}
                    />
                </div>
<div className="text-center">
                <button className="btn btn-outline-primary" onClick={()=>editCurrentPost(post.id,updatedPost.postImage,updatedPost.title,updatedPost.postText)}> Submit Post</button>
</div>
</form>
            </div>

        </div>

    );
}

export default EditPost;