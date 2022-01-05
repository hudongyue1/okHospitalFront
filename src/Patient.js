import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PageLogin from './login.js';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"
import {Form, Input, Button, Col, Radio} from 'antd'
import 'antd/dist/antd.css';
import instance from './AxiosInstance';
import {getChar, getSubs, postChar, postReg} from './api.js'
import SubsInf from './showInf/SubsInf';
import InputReg from './showInf/InputReg';
import RegInf from './showInf/RegInf';
import CharInf from './showInf/CharInf';
const token =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE5NzYwMTEsInN1YiI6InB0cHQxIiwiaWF0IjoxNjQxMzcxMjExfQ.b4JUlc9RoYjqC_am8Gm4pglKRnjnZN4PPkPq_eryoxY";


class EnterPatientID extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.getSubscribe=this.getSubscribe.bind(this)
        this.directlyRegister=this.directlyRegister.bind(this)
        this.handleChange=this.handleChange.bind(this) //star bind
    }
    getSubscribe(e) {
        getSubs(this.props.upperState.patientID, this.props.upperState.token).then(res => {
            console.log("this is the result")
            console.log(res)
            this.props.upperSetState({subscriptionInf: res.data.data.subscribe})
            console.log(res.data.data.subscribe);
            this.props.setPage(2);
        })

        // this.props.setPage(2);

        // this.props.upperSetState({subsriptionInf:{test: "test subscription"}})
        
    }
    directlyRegister(e) {
        this.props.upperSetState({isSolid:false, 
            registrationInf:{
                patientId: this.props.upperState.patientID,
                registerChoice: "",
                registerTime: "2022/01/22 00:00",
                isSubscribe: 0
            }
        });
        this.props.setPage(3);
    }
    handleChange(e) {
        console.log(this.props.upperState.patientID)
        this.props.upperSetState({patientID: e.target.value})
    }
    render() {
        return <div><Col span={8} align={'center'}  offset={7}><h2>this is page 1</h2> <br/>
            <span >病人信息:</span>
            <Input size= "large" value = {this.props.upperState.patientID} onChange={this.handleChange} style={{width: "400px"}}/>
            </Col>
            <Col span={8} align={'center'}  offset={7}>
            <Button  onClick={this.getSubscribe.bind(this)}> 查询预约 </Button>
            <span style={{margin: "10px 10px"}}></span>
            <Button onClick={this.directlyRegister.bind(this)}> 直接挂号 </Button>
        </Col>
        </div>
    }
}

class ConfirmSubscribe extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    confirmSubscribe(e){
        let regInf = {patientId: this.props.upperState.patientID, registerChoice: this.props.upperState.subsriptionInf.subscribeChoice,
            registerTime: this.props.upperState.subsriptionInf.subscribeTime, isSubscribe: 1};
        console.log("reginf");
        console.log(this.props.upperState);
        this.props.upperSetState({isSolid: true, registrationInf: regInf});
        this.props.setPage(3);
    }
    render() {
        return <div><h2>this is page 2</h2>
            <span>this is subscribe infrormation{this.props.upperState.subsriptionInf.test}</span> <br/>
            <SubsInf upperState = {this.props.upperState} upperSetState = {this.props.upperSetState}></SubsInf>
            <button onClick={this.confirmSubscribe.bind(this)}> 确认预约 </button>
        </div>
    }
}

function ConfirmRegister(props){
    let nav = useNavigate(); // why it works when it's outside of the useConfirmRegister &ppp
    const chooseDoctor = ((e) => {
        //async 获取医生
        props.upperSetState({experts:["4","5","6"], departmentlists:["1","2","3"]});
        props.setPage(4);
    })
    const confirmRegister = ((e) => {
        // async use nav after get id!!
        console.log(props.upperState.token);
        postReg(props.upperState.registrationInf, props.upperState.token, "cg1").then((res)=>{
            console.log("this is res of reg");
            console.log(res);
            nav("/charge/chargeTable?id="+res.data.data.chargeTableId);
        })

    })
    return (<div><h2>this is page 3</h2>
    <span>this is register information to be filled</span> <br/>
    <InputReg setPage={props.setPage} upperSetState ={props.upperSetState} upperState = {props.upperState}/>
    <button onClick={chooseDoctor}> 选择医生 </button> <br/>
    <button onClick={confirmRegister}> 确认挂号 </button>
    </div>)
}

function ChooseDoctor(props) {
    const confirmDoctor = (e) => {
        
        props.setPage(3);
    }
    console.log(props.upperState.experts);
    return <div><h2>this is page 4</h2>
    <span>there are doctors!</span> <br/>
    <RegInf upperState = {props.upperState} upperSetState = {props.upperSetState}/>
    <button onClick={confirmDoctor}> 确认医生 </button> <br/>
    </div>
}

class Registrar extends React.Component {
    constructor(props){
        super(props);
        this.state = {patientID:"pt3", page: 1, 
            subsriptionInf: {test:"testInf", subscribeChoice: "dt33", subscribeTime: "2022/3/3 12:30"}, 
            registrationInf: {registerChoice:"", patientId:""}, 
            isSolid: false, experts:{}, departmentlists:{}, 
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE5NjYxMTMsInN1YiI6InB0cHQxIiwiaWF0IjoxNjQxMzYxMzEzfQ.VkfigAlLhuNr3sMfiWWZ9ygcn2-mPv_-RXSqxNaDfbI"};

    }

    setPage(p){
        this.setState({page: p});
    }
    render() {
        return (<div><h1>this is a registrar</h1>
            {this.state.page == 1 ? <EnterPatientID setPage = {this.setPage.bind(this)} upperState = {this.state} upperSetState = {this.setState.bind(this)}/>:
            this.state.page == 2 ? (<ConfirmSubscribe setPage = {this.setPage.bind(this)} upperState = {this.state} upperSetState = {this.setState.bind(this)}/>):
            this.state.page == 3 ? <ConfirmRegister setPage = {this.setPage.bind(this)} upperState = {this.state} upperSetState = {this.setState.bind(this)}/>:
            <ChooseDoctor setPage = {this.setPage.bind(this)} upperState = {this.state} upperSetState = {this.setState.bind(this)}/>}
        </div>);
    }
}

function GetChargeTable(props) {
    const [tableID, setTableID] = useState("");
    const [inputVal, setInputVal] = useState("");
    const nav = useNavigate();
    const getChargeTable = ((e) => {
        // use nav after get id!!
        getChar(inputVal,token).then( (res) =>{
            console.log("the charge table:")
            console.log(res);
            nav("/charge/chargeTable?id="+inputVal)
        })
    });
    const handleChange = (e) => {
        console.log(inputVal)
        setInputVal(e.target.value);
    }
    return (<div><h1>this is a charger</h1>
        <h2>use this to get charge table!</h2>
        
        <span>input the id of charge table here!</span> <br/>
        <Col span={8} align={'center'}  offset={7}>
            <Input size= "large" value ={inputVal}  style={{width: "400px"}} onChange = {handleChange}/>
        </Col>
        <button onClick={getChargeTable}> 查询账单 </button> <br/>
    </div>);
}

function ConfirmChargeTable(props) {
    // get information
    const queryParams = new URLSearchParams(window.location.search);
    const tableId = queryParams.get('id');
    const nav = useNavigate();
    const toPayCharge = ((e) => {
        
        nav("/charge/pay?id="+tableId);
    });
    return (<div><h1>this is a charger</h1>
        <h2>confirm charge table here!</h2>
        <span>this is the inf of charge table</span> <br/>
        <CharInf upperSetState = {props.upperSetState} upperState = {props.upperState}></CharInf>
        <button onClick = {toPayCharge}> 确认账单 </button> <br/>
    </div>);
}

function PayForCharge(props) {
    // get information
    const nav = useNavigate();
    const [isVis, setVis] = useState();
    
    const toPay = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const tableId = queryParams.get('id');
        postChar(tableId, token).then((res) => {
            console.log("vis");
            console.log(res)
            setVis("true");
            setTimeout(nav("/"), 10000);
        })
    }
    
    return (<div><h1>this is a charger</h1>
        <h2>pay here!</h2>
        <span>this is how you pay</span> <br/>
        <Button onClick={toPay}> 确认支付 </Button> <br/>
        {isVis?<span>支付成功！即将跳转</span>:<span></span>}
    </div>);
    // what if fail at paying?
}

function Patient (props) {
    console.log("path:"+window.location.pathname);
    const dic ={"r": "register","c":"charge"};
    console.log("path::"+dic[window.location.pathname[1]]);
    const [curPage, setCurPage] = useState(dic[window.location.pathname[1]]);
    const handleChange = (e) => {
        console.log("value of current page choice:");
        console.log(e.target.value);
        setCurPage(e.target.value);
        window.location.href= "http://"+window.location.host + "/"+e.target.value;
        
        
    }   
    return (
        <div>
        <Radio.Group  defaultValue={curPage} buttonStyle="solid" onChange={handleChange}>
            <Radio.Button value="register">挂号</Radio.Button>
            <Radio.Button value="charge">收费</Radio.Button>
        </Radio.Group>
        <Router>
            <Routes>
                <Route path = "/register" element = {<Registrar/>}/>
                <Route path = "/charge" element = {<GetChargeTable/>}/> 
                <Route path = "/charge/chargeTable" element = {<ConfirmChargeTable location = {props}/>}/>
                <Route path = "/charge/pay" element = {<PayForCharge/>}/>
                <Route path = "/*" element = {<Navigate to="/register" replace = {true}/>}/> {/* important and important on "/<-register"*/}
            </Routes>    
        </Router>
        </div>
    );
}

export default Patient;