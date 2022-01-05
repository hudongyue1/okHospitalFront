import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"
import {Form, Input, Button, Col, Radio} from 'antd';
import {getChar, getSubs, postChar, postReg, getMeds} from '../api.js' 
import {Table} from 'antd';
const token =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE5NzYwMTEsInN1YiI6InB0cHQxIiwiaWF0IjoxNjQxMzcxMjExfQ.b4JUlc9RoYjqC_am8Gm4pglKRnjnZN4PPkPq_eryoxY";

const MedicineList = (props) =>   {
    const columns = [
    {
        title: '药品ID',
        dataIndex: 'medicineListId',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '药品名',
        dataIndex: 'medicineName',
    },
    {
        title: '药品数量',
        dataIndex: 'medicineNum',
    },
    {
        title: '药品价格',
        dataIndex: 'medicinePrice',
    },
    {
        title: '药品描述',
        dataIndex: 'medicineDescription',
    },
    ];
    
    let count = 0;
    console.log("the list to map");
    console.log(props.list)
    return (
        <div>
          <Table
            columns={columns}
            dataSource={props.list.map((item)=>{
                item['key'] = count;
                count = count + 1;
                return item;
            })}
          />
        </div>
      );
}
export default MedicineList;