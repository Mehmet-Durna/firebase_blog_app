import {createContext, useState} from "react";
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "../auth/firebase";
import blokImage from "../assets/luffy.png"




export const PostContext = createContext();



function PostContextProvider({children}) {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [postImage, setPostImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG86RDiPaezKizmzQXeh315GAh8Cs4y4X5mKCeG93dzFhzQDaSHercGGEBmo6SrpbrkNI&usqp=CAU");
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");


    const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };



    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };



    function getOnePost(id){
        const result = postLists?.filter((post)=> post.id==id)[0];
        return result;
    }




    return (
        <PostContext.Provider value={{postLists,setPostList,deletePost,getOnePost,postsCollectionRef,title,setTitle,postText,setPostText,postImage,setPostImage,getPosts}}>
            {children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;