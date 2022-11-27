import React, {useState} from 'react';
import './Search.css';

const Search = ({records, setRecords, onSubmitForm}) => {
    return (
        <div class='SearchCSS'>
            <form onSubmit = {onSubmitForm}>
                <input 
                    type= "search"
                    placeholder= "Search Date..."
                    class = "SearchBar mr2"
                    value={records}
                    onChange={e => setRecords(e.target.value)}
                    />
                <button  
                    class= "SearchButton"> 
                    Search
                </button>
            </form>
            <p> 
                Note that '_' represents space and the search format goes as follows: <p class = "bold">DATE '_' STATE </p>
            </p>
        </div>
    );
}

export default Search