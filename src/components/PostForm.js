import {Button, Form} from "react-bootstrap";


function PostForm({handleChange, handleSubmit,post}) {
    return (
        <div className="container">
            <h1 className="text-center text-warning">Create A Post</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label > Image:</Form.Label>
                    <Form.Control
                        name="postImage"
                        required
                        className="form-control"
                        type="text"
                         placeholder ={post? null:"image url"}
                        value={post? post.postImage:undefined}
                        onChange={handleChange}
                    />
                </Form.Group>


                <Form className="mb-3">
                    <Form.Label > Title:</Form.Label>
                    <Form.Control
                        required
                        name="title"
                        className="form-control"
                        type="text"
                        placeholder ={post? null:"title"}
                        value={post? post.title:undefined}
                        onChange={handleChange}
                    />
                </Form>

                <Form className="mb-3">
                    <Form.Label > Post:</Form.Label>
                    <Form.Control
                        as="textarea"
                        required
                        name="postText"
                        rows="7"
                        placeholder ={post? null:"post..."}
                        value={post? post.postText:undefined}
                        onChange={handleChange}
                    />
                </Form>
                <div className="text-center">
                    <Button variant="outline-primary" type="submit"> Submit Post</Button>
                </div>
            </Form>
        </div>
    );
}

export default PostForm;