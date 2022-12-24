import Post from "../components/Post";


function Posts({posts}) {


    return (

            <div className="row row-cols-1 row-cols-md-2 ">

                {posts?.map((post) => {
                    return (
                        <Post post={post} key={post.id}/>
                    );
                })}

            </div>

    );
}

export default Posts;
