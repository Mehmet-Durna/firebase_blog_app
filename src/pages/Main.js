import Posts from "../components/Posts";
import {useContext, useState} from "react";
import {PostContext} from "../context/PostContext";


function Main() {

    const {postLists} = useContext(PostContext);
    const [ search, setSearch ] = useState("");
    const [ filterType, setFilterType ] = useState("title");
    const posts= postLists.filter(p => filterType==="Title"?
        p.title.toLowerCase().includes(search.toLowerCase())
        :
        p.author.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container d-flex flex-column">
            <form className="align-self-start">

                <div className="mb-3">
                    <label className="form-label"> Search By: {filterType} <hr/>


                        <button className="btn btn-outline-primary" onClick={(e)=>{
                            e.preventDefault();
                            setFilterType("Title")
                        }}> Title </button>

                        <button className="btn btn-outline-primary" onClick={(e)=>{
                            e.preventDefault();
                            setFilterType("Author")
                        }}> Author </button>


                    </label>
                    <input
                        className="form-control"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </form>



            <h1 className="text-center text-danger">Share Your Ideas</h1>


           <Posts posts={posts}/>



        </div>
    );
}

export default Main;
