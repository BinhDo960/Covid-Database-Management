import React, {useMemo, Fragment, useState} from 'react';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Search2 from './Components/Search2/Search2';
import Search3 from './Components/Search3/Search3';
import DataTable from './Components/DataTable/DataTable';
import "@progress/kendo-theme-default/dist/all.css";
import 'tachyons';
import './App.css';

function App(){

  const [ s, setS ] = useState("Date and State");
  //var s = "Date and State";
  const [records, setRecords] = useState("");
  const [records2, setRecords2] = useState("");
  const [searchType, setSearchType] = useState("");
  const [data, setData] = useState([]);
  const categories = ["Date and State", "Date and Death", "Date and Death Confirmed"];

  const onSubmitForm = async (e) =>{
    e.preventDefault();
    try {
      // This is the main connection to our CSE 412 API as its fetching the 
      const response = await fetch(`http://localhost:3001/datestate/?c_date=${records}`);
      const parseResponse = await response.json();
      setData(parseResponse);
    } catch (err) {
      console.error(err.mesage)
    }
  }

  const onSubmitForm2 = async (e) =>{
    e.preventDefault();
    try { 
      const response = await fetch(`http://localhost:3001/datedeath/?c_date=${records}&c_death=${records2}`);
      const parseResponse = await response.json();
      setData(parseResponse);
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
          {s === "Date and Death" && (<Search2
                  records = {records} 
                  setRecords = {setRecords}
                  records2 = {records2}
                  setRecords2 = {setRecords2} 
                  onSubmitForm = {onSubmitForm2}/>)}
          {s === "Date and Death Confirmed" && (<Search3
                  records = {records} 
                  setRecords = {setRecords}
                  records2 = {records2}
                  setRecords2 = {setRecords2} 
                  onSubmitForm = {onSubmitForm2}/>)}
          <DataTable data = {data}/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
