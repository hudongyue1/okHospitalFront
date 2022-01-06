import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"
import {Form, Input, Button, Col, Radio} from 'antd';
import {getChar, getSubs, postChar, postReg, getMeds, postPha} from '../api.js' 
import {Table} from 'antd';
import MedicineList from '../pharmacist/medicineList'
import {getMedsD, postDis} from '../api.js'
import 'antd/dist/antd.css';
const token =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE5NzYwMTEsInN1YiI6InB0cHQxIiwiaWF0IjoxNjQxMzcxMjExfQ.b4JUlc9RoYjqC_am8Gm4pglKRnjnZN4PPkPq_eryoxY";

var inStyle = {
    textAlign: 'center',
    padding: '20px',
    border: '100px' 
    // background-color: 'black',
  // makesure here is String确保这里是一个字符串，以下是es6写法
};

const DispMedicine = (props) =>   {
    const [data, setData] = useState({medicineTableArray: [], medicineTableId: "", dispenserId: "", state: 4});
    const [dispenserId, setDis] = useState("pm1");
    const getNew = () => {
        let tmp;
        getMedsD(token).then((res) => {
            console.log("the medsres is:");
            console.log(res);
            tmp = res.data.data;
            let count= 0;
            console.log("stringfy json:")
            console.log(JSON.stringify(tmp));

            if(JSON.stringify(tmp) == '{}')
                setData({medicineTableArray:[], medicineTableId: "", dispenserId: "", state: 4});
            else
                setData(tmp);
        })
    }

    useEffect(() => {
        getNew();
    }, []);

    const handleClick = () => {
        console.log("before post data:");
        console.log(data);
        if(data.state == undefined)
            data['state'] = 4;
        postDis(data.medicineTableId, token, data.dispenserId, data.state).then((res) => {
            console.log("after give the medicine");
            console.log(res);
            getNew();
        })
    }

    return (
        <div style={inStyle}>
            <h1>the doctor is {data.doctorId}</h1>
            <h1>the patient is {data.patientId}</h1>
            <MedicineList list = {data.medicineTableArray}/>
            <Button type = "primary" onClick = {handleClick}>确认发药</Button>
        </div>
      );
}
export default DispMedicine;