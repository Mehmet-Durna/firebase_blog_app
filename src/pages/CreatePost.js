import {addDoc} from "firebase/firestore";
import {auth} from "../auth/firebase";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {PostContext} from "../context/PostContext";
import PostForm from "../components/PostForm";


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
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
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
