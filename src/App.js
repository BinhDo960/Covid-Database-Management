import React, {Fragment, useState} from 'react';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {nanoid} from 'nanoid';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Search2 from './Components/Search2/Search2';
import Search2a from './Components/Search2/Search2a';
import Search3 from './Components/Search3/Search3';
import Search3a from './Components/Search3/Search3a';
import Search4 from './Components/Search4/Search4';
import Search5 from './Components/Search5/Search5';
import DataTable from './Components/DataTable/DataTable';
import DataRecords from './Components/DataTable/DataRecords.json';
import "@progress/kendo-theme-default/dist/all.css";
import 'tachyons';
import './App.css';

function App(){

  const [ s, setS ] = useState("Date and State");
  const [records, setRecords] = useState("");
  const [records2, setRecords2] = useState("");
  const [records3, setRecords3] = useState("");
  const [records4, setRecords4] = useState("");
  const [records5, setRecords5] = useState("");
  const [addFormData, setAddFormData] = useState({
    c_date: '',
    c_state: ''
  })

  const [stampdata, setStampdata] = useState(DataRecords);
  const categories = ["Date and State", "Date and Death Greater", "Date and Death Lesser", "Date and Death Confirmed Greater", "Date and Death Confirmed Lesser", "Insert Record", "Delete Record"];

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('c_date');
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newRecords = {
      id: nanoid(),
      c_date: addFormData.c_date,
      c_state: addFormData.c_state
    }

    const newData = [...stampdata, newRecords];
    setStampdata(newData);
  }

  const onSubmitForm = async (e) =>{
    e.preventDefault();
    try {
      // This is the main connection to our CSE 412 API as its fetching the 
      const response = await fetch(`http://localhost:3001/datestate/?c_date=${records}`);
      const parseResponse = await response.json();
      setStampdata(parseResponse);
      console.log(parseResponse);
    } catch (err) {
      console.error(err.mesage)
    }
  }

  const onSubmitForm2 = async (e) =>{
    e.preventDefault();
    try { 
      const response = await fetch(`http://localhost:3001/datedeathgreater/?c_date=${records}&c_death=${records2}`);
      const parseResponse = await response.json();
      setStampdata(parseResponse);
    } catch (err) {
      console.error(err.mesage)
    }
  }

  const onSubmitForm2a = async (e) =>{
    e.preventDefault();
    try { 
      const response = await fetch(`http://localhost:3001/datedeathlesser/?c_date=${records}&c_death=${records2}`);
      const parseResponse = await response.json();
      setStampdata(parseResponse);
    } catch (err) {
      console.error(err.mesage)
    }
  }

  const onSubmitForm3 = async (e) =>{
    e.preventDefault();
    try { 
      const response = await fetch(`http://localhost:3001/dateconfirmedgreater/?c_date=${records}&c_deathconfirmed=${records3}`);
      const parseResponse = await response.json();
      setStampdata(parseResponse);
    } catch (err) {
      console.error(err.mesage)
    }
  }

  const onSubmitForm3a = async (e) =>{
    e.preventDefault();
    try { 
      const response = await fetch(`http://localhost:3001/dateconfirmedlesser/?c_date=${records}&c_deathconfirmed=${records3}`);
      const parseResponse = await response.json();
      setStampdata(parseResponse);
    } catch (err) {
      console.error(err.mesage)
    }
  }

  const onSubmitForm4 = async (e) =>{
    e.preventDefault();
    try { 
      const response = await fetch(`http://localhost:3001/dataadd/?c_date=${records}&c_state=${records4}`);
      const parseResponse = await response.json();
      setStampdata(parseResponse);
    } catch (err) {
      console.error(err.mesage)
    }
  }

  const onSubmitForm5 = async (e) =>{
    e.preventDefault();
    try { 
      const response = await fetch(`http://localhost:3001/datadelete/?c_date=${records}&c_state=${records5}`);
      const parseResponse = await response.json();
      setStampdata(parseResponse);
    } catch (err) {
      console.error(err.mesage)
    }
  }

  const switchSearchType= (value) => {
    setS(value);
    //console.log(value);
  }

  return (
    <Fragment>
      <div>
        <div className="background">
          <Header />
            <div class = 'centerDropDown'>
              <DropDownList data={categories} onChange={e => switchSearchType(e.value)}/>
            </div>
            {s === "Date and State" && (<Search
                    records = {records} 
                    setRecords = {setRecords} 
                    onSubmitForm = {onSubmitForm}/>)}
            {s === "Date and Death Greater" && (<Search2
                    records = {records} 
                    setRecords = {setRecords}
                    records2 = {records2}
                    setRecords2 = {setRecords2} 
                    onSubmitForm = {onSubmitForm2}/>)}
            {s === "Date and Death Lesser" && (<Search2a
                    records = {records} 
                    setRecords = {setRecords}
                    records2 = {records2}
                    setRecords2 = {setRecords2} 
                    onSubmitForm = {onSubmitForm2a}/>)}
            {s === "Date and Death Confirmed Greater" && (<Search3
                    records = {records} 
                    setRecords = {setRecords}
                    records2 = {records3}
                    setRecords3 = {setRecords3} 
                    onSubmitForm = {onSubmitForm3}/>)}
            {s === "Date and Death Confirmed Lesser" && (<Search3a
                    records = {records} 
                    setRecords = {setRecords}
                    records2 = {records3}
                    setRecords3 = {setRecords3} 
                    onSubmitForm = {onSubmitForm3a}/>)}
            {s === "Insert Record" && (<Search4
                    handleAddFormChange = {handleAddFormChange} 
                    handleAddFormSubmit = {handleAddFormSubmit}/>)}
            {/* {s === "Insert Record" && (<Search4
                    records = {records} 
                    setRecords = {setRecords}
                    records4 = {records4}
                    setRecords4 = {setRecords4} 
                    onSubmitForm = {onSubmitForm4}/>)} */}
            {s === "Delete Record" && (<Search5
                    records = {records} 
                    setRecords = {setRecords}
                    records5 = {records5}
                    setRecords5 = {setRecords5} 
                    onSubmitForm = {onSubmitForm5}/>)}
          <DataTable data = {stampdata}/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
