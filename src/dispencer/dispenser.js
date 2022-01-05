import { useNavigate, BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { useState } from "react/cjs/react.development";
import {Radio} from 'antd'
import DispMedicine from "./send";
import {GetWithdrawTable, ConfirmWithdraw} from "./withdraw"
import React from 'react';

class Dispenser extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE5MDA5NTAsInN1YiI6InB0cHQxIiwiaWF0IjoxNjQxMjk2MTUwfQ.s5Eyk8gzzM5SHrjfZT89QYGqvi8M5niXCBQK43qJqz4",
            medicineTableArray:[]}
    }
    
    // const nav = useNavigate();
    handleChange(e) {
        // nav(e.target.value);
        window.location.replace("http://"+window.location.host+"/"+e.target.value);
        // console.log(window.location.pathname)
    }
    render() {
        return <Router>
            <Radio.Group  defaultValue={window.location.pathname.substr(1,8)} buttonStyle="solid" onChange={this.handleChange}>
                <Radio.Button value="dispense">发药</Radio.Button>
                <Radio.Button value="withdraw">退药</Radio.Button>
            </Radio.Group>
            <Routes>
                <Route path = "/dispense"  element = {<DispMedicine upperSetState = {this.setState.bind(this)} upperState = {this.state}/>}/>
                <Route path = "/withdraw" element = {<GetWithdrawTable upperSetState = {this.setState.bind(this)} upperState = {this.state}/>} />
                <Route path = "/withdraw/withdrawTable" element = {<ConfirmWithdraw upperSetState = {this.setState.bind(this)} upperState = {this.state}/>} />
            </Routes>
        </Router>
    }

}
export default Dispenser;