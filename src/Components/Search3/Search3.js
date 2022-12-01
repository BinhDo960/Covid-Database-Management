import React, {useState} from 'react';
import './Search3.css';

const Search3 = ({records, setRecords, records3, setRecords3, onSubmitForm}) => {
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
                    value={records3}
                    onChange={e => setRecords3(e.target.value)}
                    />
                <button  
                    class= "SearchButton"> 
                    Search
                </button>
            </form>
            <p> 
                The search format goes as follows where '_' represents space: <p class = "bold">DATE || ' ' || STATE AND DEATHCONFIRMED '{'>'}' ? </p>
            </p>
        </div>
    );
}

export default Search3