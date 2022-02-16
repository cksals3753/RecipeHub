import React from 'react';
import '../css/search.css';

const Search = () => {
    return (
        <div className="hub">
            <div>
                <input type="text" placeholder='Search' className="search" />
                <button type="button">검색</button>
            </div>
        </div>
    );
}

export default Search;