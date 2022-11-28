import React, {useState} from 'react';
import './Search.css';

const Search = ({searchType, setSearchType, records, setRecords, onSubmitForm}) => {
    return (
        <div class='SearchCSS'>
            <form onSubmit = {onSubmitForm}>
                <input 
                    type= "search"
                    placeholder= "Search..."
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
                An empty search bar is the default parameter to select all known contents in the database. The search format goes as follows where '_' represents space: <p class = "bold">DATE '_' STATE </p>
            </p>
        </div>
    );
}

export default Search