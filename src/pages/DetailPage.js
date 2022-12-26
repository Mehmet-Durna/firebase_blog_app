import React, {useContext, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {PostContext} from "../context/PostContext";
import {AuthContext} from "../context/AuthContext";




function DetailPage() {
    const location = useLocation();
    const post = location.state.post;
    const navigate = useNavigate();
    const {deletePost} = useContext(PostContext);
    const {currentUser} = useContext(AuthContext);



function deleteHandler(id){
        deletePost(id)
    navigate("/")
}

    function editHandler(){
        navigate(`/edit-post/${post.id}`,{
            state:{
                post:post
            }
        })

    }




    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-lg-2  ">
                <div className="col  ">
                    <h1 className="text-center">{post?.title}</h1>
                    <p>{post?.postText}</p>
                    <h5>{post?.author.displayName}</h5>

                </div>
                <div className="col  align-self-center">
                    <img className="detail-image " src={post?.postImage} alt="Card image cap"/>
                </div>
            </div>
            <div className="text-center  my-3">
                {currentUser?.uid === post?.author.uid &&
                    <div className="deletePost">
                        <button className="mx-3 btn btn-outline-danger"
                                onClick={() => {
                                    deleteHandler(post.id);
                                }}
                        >
                            &#128465;
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => {
                            editHandler();
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