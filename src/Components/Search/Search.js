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
                <input type = "checkbox" id="filter1" name="filter1"></input> 
                <label for = "filter1"> filter1 </label>
                <input type = "checkbox" id="filter2" name="filter2"></input> 
                <label for = "filter2"> filter2 </label>
                <input type = "checkbox" id="filter3" name="filter3"></input> 
                <label for = "filter3"> filter3 </label>
                <input type = "checkbox" id="filter4" name="filter4"></input> 
                <label for = "filter4"> filter4 </label>
            </p>
        </div>
    );
}

export default Search