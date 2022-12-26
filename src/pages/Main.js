import Posts from "../components/Posts";
import {useContext, useState} from "react";
import {PostContext} from "../context/PostContext";
import {Button} from "react-bootstrap";
import SearchBar from "../components/SearchBar";


function Main() {

    const {postLists} = useContext(PostContext);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("Title");

    const posts = postLists.filter(p => filterType === "Title" ?
        p.title.toLowerCase().includes(search.toLowerCase())
        :
        p.author.displayName.toLowerCase().includes(search.toLowerCase())
    );




    return (
        <div className="container d-flex flex-column">
           <SearchBar search={search} setSearch={setSearch} filterType={filterType} setFilterType={setFilterType}/>


            <h1 className="text-center text-danger">Share Your Ideas</h1>


            <Posts posts={posts}/>


        </div>
    );
}

export default Main;
