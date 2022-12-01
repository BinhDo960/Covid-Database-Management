import React, {useState} from 'react';
import './Search4.css';

const Search4 = ({handleAddFormChange, handleAddFormSubmit}) => {
//const Search4 = ({records, setRecords, records4, setRecords4, onSubmitForm}) => {
    return (
        <div class='SearchCSS'>
            {/* <form onSubmit = {onSubmitForm}> */}
            <form onSubmit = {handleAddFormSubmit}>
                <input 
                    type= "text"
                    placeholder= "Date"
                    class = "SearchBar mr1"
                    name = "c_date"
                    //value={records}
                    //onChange={e => setRecords(e.target.value)}
                    onChange={handleAddFormChange}
                    />
                <input 
                    type= "text"
                    placeholder= "State"
                    class = "SearchBar mr1"
                    name = "c_state"
                    //value={records4}
                    //onChange={e => setRecords4(e.target.value)}
                    onChange={handleAddFormChange}
                    />
                <button  
                    class= "SearchButton"> 
                    Insert
                </button>
            </form>
            <p> 
                The insert format is as follows where '_' represents space: <p class = "bold">DATE || ' ' || STATE</p>
            </p>
        </div>
    );
}

export default Search4