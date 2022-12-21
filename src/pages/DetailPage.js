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
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-lg-2  ">

                <div className="col  ">
                    <h1 className="text-center">{post?.title}</h1>
                    <p>{post?.postText}</p>
                    <h5>{post?.author.name}</h5>

                </div>


                <div className="col  align-self-center">
                    <img className="detail-image " src={post?.postImage} alt="Card image cap"/>
                </div>



            </div>

               <div className="text-center  my-3">
                   {currentUser.uid === post.author.id &&
                       <div className="deletePost">
                           <button className="mx-3 btn btn-outline-danger"
                               onClick={() => {
                                   deletePost(post.id);
                               }}
                           >
                               &#128465;
                           </button>
                           <button className="btn btn-outline-primary" onClick={() => {
                               navigate(`/edit-post/${post.id}`)
                           }}>
                               &#9998;
                           </button>
                       </div>
                   }
               </div>

        </div>
    );
}

export default DetailPage;