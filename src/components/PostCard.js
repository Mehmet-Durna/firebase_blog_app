import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card} from "react-bootstrap";



function PostCard({post}) {

    const navigate = useNavigate();
    const params = useParams();
    console.log(params.authorName)
    console.log(post.author.displayName)



    function cardHandler(post) {
        navigate(`/detail-page/${post.id}`,{
            state:{
                post:post
            }
        })
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className="card-title text-center text-success text-capitalize ">{post.title}</Card.Title>
                <Card.Img className="card-img-top mb-2" src={post.postImage ? post.postImage:""} alt="Card"/>
                <Card.Text className="card-text card__preview-text">
                    {post.postText}
                </Card.Text>
                <Button variant="outline-primary" onClick={()=> {
                    cardHandler(post)
                }}>Continue Reading</Button>
            </Card.Body>

            <Card.Footer>
                {params.authorName!==post.author.displayName? <Button variant="outline-primary"
                         onClick={() => navigate(`author-profile/${post.author.displayName}`, {state: {user: post.author}})}>{post.author.displayName}
                </Button>: <small>{post.author.displayName}</small>
                } </Card.Footer>
        </Card>
    );
}

export default PostCard;