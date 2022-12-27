import React, {useState} from 'react';
import {Button, CloseButton} from "react-bootstrap";

function SearchBar({filterType,setFilterType,search, setSearch}) {


    const [displaySearch, setDisplaySearch] = useState(false);



    return (

        <>

        {displaySearch ? <form className="align-self-start border border-danger rounded">

                <div className="mb-3 d-grid">
                    <div className="d-flex justify-content-between align-items-stretch">
                        <label className="form-label"> Search By: {filterType}</label>

                        <CloseButton  onClick={(e) => {
                            e.preventDefault()
                            setDisplaySearch(false)
                            setSearch("")
                        }}/>
                    </div>

                    <div>
                        <Button variant="outline-primary" onClick={(e) => {
                            e.preventDefault();
                            setFilterType("Title")
                        }}> Title
                        </Button>

                        <Button variant="outline-danger" onClick={(e) => {
                            e.preventDefault();
                            setFilterType("Author")
                        }}> Author
                        </Button>
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
        </>
    );
}

export default SearchBar;