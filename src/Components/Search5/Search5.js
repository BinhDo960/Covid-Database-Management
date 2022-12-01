import React, {useState} from 'react';
import './Search5.css';

const Search5 = ({records, setRecords, records5, setRecords5, onSubmitForm}) => {
    return (
        <div class='SearchCSS'>
            <form onSubmit = {onSubmitForm}>
                <input 
                    type= "search"
                    placeholder= "Date"
                    class = "SearchBar mr1"
                    value={records}
                    onChange={e => setRecords(e.target.value)}
                    />
                <input 
                    type= "search"
                    placeholder= "State"
                    class = "SearchBar mr1"
                    value={records5}
                    onChange={e => setRecords5(e.target.value)}
                    />
                <button  
                    class= "SearchButton"> 
                    Delete
                </button>
            </form>
            <p> 
                The delete format is as follows where '_' represents space: <p class = "bold">DATE || ' ' || STATE</p>
            </p>
        </div>
    );
}

export default Search5