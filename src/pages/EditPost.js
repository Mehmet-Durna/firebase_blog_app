import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../auth/firebase";
import PostForm from "../components/PostForm";


function EditPost() {

    const location = useLocation();
    const navigate = useNavigate();
    const post = location.state.post;
    const [updatedPost, setUpdatedPost] = useState(post);

const {postImage,title,postText}=updatedPost


    const handleSubmit = async () => {
        const postDoc = doc(db, "posts", post.id);
        navigate("/");
        await updateDoc(postDoc, {
            postImage: postImage,
            title: title,
            postText: postText,
        });

    }

    const handleChange = (e) => {
        setUpdatedPost({...updatedPost, [e.target.name]: e.target.value})
    }


    return (


      <PostForm handleChange={handleChange} handleSubmit={handleSubmit} post={updatedPost}/>


    );
}

export default EditPost;