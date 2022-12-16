
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import {PostContext} from "../context/PostContext";




function CreatePost() {


    const {postsCollectionRef,title,setTitle,postText,setPostText,postImage,setPostImage}=useContext(PostContext);

    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            postImage,
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/");
    };


    return (
        <div className="createPostPage">
            <div className="cpContainer s">
                <h1>Create A Post</h1>

                <div className="inputGp" >
                    <label> Image:</label>
                    <input
                        placeholder="Image Url..."
                        onChange={(event) => {
                            setPostImage(event.target.value);
                        }}
                    />
                </div>
                <div className="inputGp" >
                    <label> Title:</label>
                    <input
                        placeholder="Title..."
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>
                <div className="inputGp">
                    <label> Post:</label>
                    <textarea
                        placeholder="Post..."
                        onChange={(event) => {
                            setPostText(event.target.value);
                        }}
                    />
                </div>
                <button onClick={createPost}> Submit Post</button>
            </div>
        </div>
    );
}

export default CreatePost;
