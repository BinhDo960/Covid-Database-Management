import React, {Component, Fragment, useState} from 'react';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import DataTable from './Components/DataTable/DataTable';
import 'tachyons';
import './App.css';

function App(){

  const [records, setRecords] = useState("");
  const [data, setData] = useState([]);

  const onSubmitForm = async (e) =>{
    e.preventDefault();
    try {
      // This is the main connection to our CSE 412 API as its fetching the 
      const response = await fetch(`http://localhost:3001/?c_date=${records}`);
      const parseResponse = await response.json();

      //console.log(parseResponse);
      setData(parseResponse);
    } catch (err) {
      console.error(err.mesage)
    }
  }

  return (
    <Fragment>
      <div>
        <div className="background">
          <Header />
          <Search records = {records} setRecords = {setRecords} onSubmitForm = {onSubmitForm}/>
          <DataTable data = {data}/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
