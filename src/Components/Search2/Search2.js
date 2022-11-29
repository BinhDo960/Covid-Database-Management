import React, {useState} from 'react';
import './Search2.css';

const Search2 = ({records, setRecords, records2, setRecords2, onSubmitForm}) => {
    return (
        <div class='SearchCSS'>
            <form onSubmit = {onSubmitForm}>
                <input 
                    type= "search"
                    placeholder= "Search Date..."
                    class = "SearchBar mr1"
                    value={records}
                    onChange={e => setRecords(e.target.value)}
                    />
                <input 
                    type= "search"
                    placeholder= "Search Death..."
                    class = "SearchBar mr1"
                    value={records2}
                    onChange={e => setRecords2(e.target.value)}
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

export default Search2