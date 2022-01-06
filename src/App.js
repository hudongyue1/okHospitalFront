import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './login/index';
import Charger from './charger/charger.js';
import Test from './Test.js'
import RegInf from './showInf/RegInf';
import CharInf from './showInf/CharInf';
import InputReg from './showInf/InputReg';
import MedicineList from './pharmacist/medicineList'
import Pharmacist from './pharmacist/pharmacist';
import DispMedicine from './dispencer/send';
import Dispenser from './dispencer/dispenser';
import Doctor from './doctor/doctor';
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
/*
function AppLayout() {
    const [token, setToken] = useState();

    const handleLogout = (e) => {
        e.preventDefault();
        setToken(null);
    }

    if (!token) {
        return <PageLogin saveToken={ setToken } />;
    }

    return (
        <HashRouter>
            { token ? <p>Welcome, { token }。<a href="#" onClick={ handleLogout }>Logout</a></p> : '' }
            
        </HashRouter>
    );
}
*/

function App() {
  // function handleClick() {
  //     history.push("/report");
  // }
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
      {/* <Dispenser/> */
        return (
          <div>
            <Router>
                <Routes>
                    <Route path = "/" element = {<Login/>} exact />
                    <Route path = "/login" element = {<Login/>}/>
                    <Route path = "/charger/*" element = {<Charger/>}/> 
                    <Route path = "/pharmacist/*" element = {<Pharmacist/>}/> 
                    <Route path = "/dispenser/*" element = {<Dispenser/>}/> 
                    <Route path = "/doctor/*" element = {<Doctor/>}/> 
                </Routes>    
            </Router>
          </div>
          // <Dispenser />
      );
}

export default App;
