import Posts from "../components/Posts";
import {useContext, useState} from "react";
import {PostContext} from "../context/PostContext";


function Main() {

    const {postLists} = useContext(PostContext);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("Title");
    const posts = postLists.filter(p => filterType === "Title" ?
        p.title.toLowerCase().includes(search.toLowerCase())
        :
        p.author.name.toLowerCase().includes(search.toLowerCase())
    );

    const [displaySearch, setDisplaySearch] = useState(false);


    return (
        <div className="container d-flex flex-column">
            {displaySearch ? <form className="align-self-start border border-danger rounded">

                <div className="mb-3 d-grid">
                    <div className="d-flex justify-content-between align-items-stretch">
                        <label className="form-label"> Search By: {filterType}</label>
                        <p className="btn p-0 text-danger " onClick={(e) => {
                            e.preventDefault()
                            setDisplaySearch(false)
                        }}>X</p>
                    </div>

                    <div>
                        <button className="btn btn-outline-danger " onClick={(e) => {
                            e.preventDefault();
                            setFilterType("Title")
                        }}> Title
                        </button>

                        <button className="btn btn-outline-primary" onClick={(e) => {
                            e.preventDefault();
                            setFilterType("Author")
                        }}> Author
                        </button>
                    </div>


                    <input
                        className="form-control"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </form> : <button className="align-self-start btn btn-outline-success" onClick={(e) => {
                e.preventDefault()
                setDisplaySearch(true)
            }}>Search</button>}


            <h1 className="text-center text-danger">Share Your Ideas</h1>


            <Posts posts={posts}/>


        </div>
    );
}

export default Main;
