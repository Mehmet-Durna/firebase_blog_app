import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {PostContext} from "../context/PostContext";
import {AuthContext} from "../context/AuthContext";
import {FaPen} from "react-icons/fa";





function DetailPage() {
    const params = useParams();
    const {getOnePost,deletePost} = useContext(PostContext)
    const post = getOnePost(params.id)
    const navigate=useNavigate();
    const {currentUser} = useContext(AuthContext);





    return (
        <div>
            <img className="card-img-top" src={post.postImage} alt="Card image cap"/>
            <h1>{post?.title}</h1>
            <h1>{post?.postText}</h1>
            <h1>{post?.author.name}</h1>
            {   currentUser.uid === post.author.id &&
                <FaPen className="edit-pen" onClick={() => {
                navigate(`/edit-post/${post.id}`)
            }}/>
            }

            {currentUser.uid === post.author.id &&
                <div className="deletePost">
                    <button
                        onClick={() => {
                            deletePost(post.id);
                        }}
                    >
                        {" "}
                        &#128465;
                    </button>


                </div>

            }


        </div>
    );
}

export default DetailPage;