

function PostForm({handleChange, handleSubmit,post}) {
    return (
        <div className="container">
            <h1 className="text-center text-warning">Create A Post</h1>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label"> Image:</label>
                    <input
                        name="postImage"
                        required
                        className="form-control"
                        type="text"
                         placeholder ={post? null:"image url"}
                        value={post? post.postImage:undefined}
                        onChange={handleChange}
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label"> Title:</label>
                    <input
                        required
                        name="title"
                        className="form-control"
                        type="text"
                        placeholder ={post? null:"title"}
                        value={post? post.title:undefined}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Post:</label>
                    <textarea
                        required
                        name="postText"
                        rows="7"
                        className="form-control"
                        placeholder ={post? null:"post..."}
                        value={post? post.postText:undefined}
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-primary" type="submit"> Submit Post</button>
                </div>
            </form>
        </div>
    );
}

export default PostForm;