import React, { useState } from 'react';
import PageLogin from '../login.js';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"
import {Form, Input, Button, Col, List} from 'antd'
import 'antd/dist/antd.css';
import instance from '../AxiosInstance';
import {getSubs} from '../api.js'
class CharInf extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            "chargeTableId": "ctf8c5ef59-80e6-4af0-9819-9153f0eec01b",
            "patientId": "pt1",
            "chargerId": null,
            "chargeCreateTime": "2022-01-03 22:20:40",
            "chargeState": 0,
            "chargePrice": 4040.5
        }
    }
    render() {

        const data = [
        {
            title: '账单ID',
            description: this.state.chargeTableId
        },
        {
            title: '病人ID',
            description: this.state.patientId
        },
        {
            title: '账单创建时间',
            description: this.state.chargeCreateTime
        },
        {
            title: '账单价格',
            description: this.state.chargePrice
        },
        {
            title: '账单状态',
            description: this.state.chargeState == 0 ? "状态0" : 
                this.state.chargeState == 1 ? "状态1" :
                this.state.chargeState == 2 ? "状态2" :"状态3" 
        }
        ];
        
        
        return (<List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={item.title}
                description= {item.description}
                />
            </List.Item>
            )}
        />);
    }
}
export default CharInf;