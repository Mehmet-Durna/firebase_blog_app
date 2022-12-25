import React from 'react';
import blokImage from "../assets/luffy.png";
import {useNavigate} from "react-router-dom";



function PostCard({post}) {

    const navigate = useNavigate();



    function cardHandler(post) {
        navigate(`/detail-page/${post.id}`,{
            state:{
                post:post
            }
        })
    }

    return (
        <div className="card my-card " >
            <div className="card-body">
                <h5 className="card-title text-center text-success text-capitalize ">{post.title}</h5>
                <img className="card-img-top mb-2" src={post.postImage ? post.postImage:blokImage} alt="Card image cap"/>
                <p className="card-text card__preview-text">
                    {post.postText}
                </p>
                <button className="btn btn-outline-success" onClick={()=> {
                    cardHandler(post)
                }}>Continue Reading</button>
            </div>

            <div className="card-footer">
                <small className="text-muted">{post.author.name}</small>
            </div>
        </div>
    );
}

export default PostCard;