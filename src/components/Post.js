import {useNavigate} from "react-router-dom";
import blokImage from "../assets/luffy.png"




function Post({post}) {

    const navigate = useNavigate();



    function cardHandler(post) {
        navigate(`/detail-page/${post.id}`)
    }

    return (
        <div className="col-6 mb-2  p-3  align-items-stretch">
        <div className="card my-card bg-danger" onClick={()=> {
            cardHandler(post)
        }}>
                <div className="card-body">
                    <h5 className="card-title text-center bg-info">{post.title}</h5>
                    <img className="card-img-top mb-2" src={post.postImage ? post.postImage:blokImage} alt="Card image cap"/>
                    <p className="card-text card__preview-text">
                        {post.postText}
                    </p>
                    <button className="btn btn-dark">Continue Reading</button>
                </div>

                <div className="card-footer">
                    <small className="text-muted">{post.author.name}</small>
                </div>
        </div>
        </div>


    );
}

export default Post;