import {useNavigate} from "react-router-dom";
import blokImage from "../assets/luffy.png"




function Post({post}) {

    const navigate = useNavigate();



    function cardHandler(post) {
        navigate(`/detail-page/${post.id}`)
    }

    return (
        <div className="col-6 mb-2">
        <div className="card" onClick={()=> {
            cardHandler(post)
        }}>
                <div className="card-body">
                    <img className="card-img-top" src={post.postImage ? post.postImage:blokImage} alt="Card image cap"/>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">
                        {post.postText}
                    </p>
                </div>

                <div className="card-footer">
                    <small className="text-muted">{post.author.name}</small>
                </div>
        </div>
        </div>


    );
}

export default Post;