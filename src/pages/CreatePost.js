import {addDoc} from "firebase/firestore";
import {auth} from "../auth/firebase";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {PostContext} from "../context/PostContext";
import PostForm from "../components/PostForm";
import {toast} from "react-toastify";


function CreatePost() {


    const {postsCollectionRef, post, setPost} = useContext(PostContext);
    let navigate = useNavigate();
    const {postImage, title, postText} = post;



    const handleSubmit = async () => {
        navigate("/");

        await addDoc(postsCollectionRef, {
            postImage,
            title,
            postText,
            author: {displayName: auth.currentUser.displayName, uid: auth.currentUser.uid,email:auth.currentUser.email,photoURL:auth.currentUser.photoURL},
        });
        toast.info('Post is created !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }



    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }





    return (
       <PostForm handleChange={handleChange} handleSubmit={handleSubmit}/>

    );
}

export default CreatePost;
