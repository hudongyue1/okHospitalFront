import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import PageLogin from './login.js';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

function useT(c) {
    const [co, setCo] = useState(0);
    useEffect(()=>{setCo(co + 1)});
    return co;
}
function useT1(c) {
    const [co, setCo] = useState(0);
    useEffect(()=>{setCo(co - 1)});
    return co;
}
function T(props){
    const coo = useT();
    return (<span>T0 {coo+props.kind}</span>);
}
function T1(props){
    const coo = useT();
    return (<span>T1 {coo-1}</span>);
}

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    handleClick(e){
        this.setState({count: this.state.count + 1});
    }
    render() {
        return (
        <div>
            <h1>count is {this.state.count}</h1>
            {this.state.count%2 == 0 ?(<T kind= {-1000000} ></T>):(<T kind = {1000000}> </T>)}
            <button onClick = {this.handleClick.bind(this)}></button>
        </div>
        );
    }
}
export default Test;