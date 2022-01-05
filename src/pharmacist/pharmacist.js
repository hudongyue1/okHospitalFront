import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"
import {Form, Input, Button, Col, Radio} from 'antd';
import {getChar, getSubs, postChar, postReg, getMeds, postPha} from '../api.js' 
import {Table} from 'antd';
import MedicineList from './medicineList.js';
import 'antd/dist/antd.css';
const token =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE5NzYwMTEsInN1YiI6InB0cHQxIiwiaWF0IjoxNjQxMzcxMjExfQ.b4JUlc9RoYjqC_am8Gm4pglKRnjnZN4PPkPq_eryoxY";

const Pharmacist = (props) =>   {
    const [data, setData] = useState({medicineTableArray: [],medicineTableId:"", pharmacistId:""});
    const [pharmacistId, setPha] = useState("pm1");
    const getNew = () => {
        let tmp;
        getMeds(token).then((res) => {
            console.log("the medsres is:");
            console.log(res);
            tmp = res.data.data;
            let count= 0;
            console.log("tmp is:")
            console.log(tmp)
            if(JSON.stringify(tmp) == '{}')
                setData({medicineTableArray: [],medicineTableId:"", pharmacistId:""});
            else
                setData(tmp);
        })
    }
    useEffect(() => {
        getNew();
    }, []);
    
    const handleClick = () => {
        postPha(data.medicineTableId, token, data.pharmacistId).then((res) => {
            console.log("after made the medicine")
            console.log(res);
            getNew();
        })
    }

    return (
        <div>
            <h1>the doctor is {data.doctorId}</h1>
            <h1>the patient is {data.patientId}</h1>
            <MedicineList list = {data.medicineTableArray}/>
            <Button type = "primary" onClick = {handleClick}>确认配药</Button>
        </div>
      );
}
export default Pharmacist;