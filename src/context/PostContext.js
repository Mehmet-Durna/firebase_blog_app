import {createContext, useEffect, useState} from "react";
import {collection, deleteDoc, doc,onSnapshot} from "firebase/firestore";
import {db} from "../auth/firebase";
import {toast} from "react-toastify";





export const PostContext = createContext();



function PostContextProvider({children}) {


    const [post, setPost] = useState({
        postText:" ",
        postImage:"",
        postTitle:" "
    });

    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");


    // By this hook we are getting collection of posts from data.
    useEffect(() => {
        onSnapshot(postsCollectionRef,(snapshot)=>{
            setPostList(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    }, );







    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        toast.warning('Post is deleted !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };



    function getOnePost(id){
        const result = postLists?.filter((post)=> post.id===id)[0];
        return result;
    };




    return (
        <PostContext.Provider value={{postLists,setPostList,deletePost,getOnePost,postsCollectionRef,post,setPost}}>
            {children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
