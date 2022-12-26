import PostCard from "./PostCard";




function Post({post}) {

    return (
        <div className="col mb-2  p-3  align-items-stretch">
        <PostCard post={post}/>
        </div>


    );
}

export default Post;