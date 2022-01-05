import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Login from './login/index';
import PageLogin from './login.js';
import  Patient from './Patient.js'
import Test from './Test.js'
import RegInf from './showInf/RegInf';
import CharInf from './showInf/CharInf';
import InputReg from './showInf/InputReg';
import MedicineList from './pharmacist/medicineList'
import Pharmacist from './pharmacist/pharmacist';
import DispMedicine from './dispencer/send';
import Dispenser from './dispencer/dispenser';
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
  */

    return (<Dispenser/>);
}

export default App;
