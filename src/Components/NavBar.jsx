import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';

let NavBar = ({setImages, setKeyword}) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    async function searchResults() {
        try {
            let response = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    query: searchTerm.trim() || "random"
                },
                headers: {
                    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                }
            })

            setImages(response.data.results);
            setKeyword(searchTerm.trim() ? searchTerm : '');
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        searchResults();
    }, [])

    return (
        <nav className="navbar bg-body-tertiary p-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Image<span className="brand-color">Hub</span></a>
                <div className="d-flex flex-grow-1 search-bar-container">
                    <FaSearch />
                    <input className="search-bar flex-grow-1 p-2" type="search"  
                    placeholder="Search for Images" aria-label="Image Bazaar Search"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.currentTarget.value);
                    }} 
                    onKeyDown={(event) => {
                        if(event.key === 'Enter') searchResults();
                    }}   
                    />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;