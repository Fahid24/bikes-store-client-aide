import React from 'react';

const Search = () => {
    const handelSearch = () => {

    }
    return (
        <div>
            <p><input type="text" value='name' /> <button onClick={handelSearch} className='btn btn-info'>Search</button></p>
        </div>
    );
};

export default Search;