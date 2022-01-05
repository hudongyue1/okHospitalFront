import React, { useState } from 'react';
import PageLogin from '../login.js';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"
import {Form, Input, Button, Col, List} from 'antd'
import 'antd/dist/antd.css';
import instance from '../AxiosInstance';
import {getSubs} from '../api.js'
class SubsInf extends  React.Component {
    constructor(props){
        super(props);
        this.state = props.upperState.subscriptionInf;
    }
    render() {

        const data = [
        {
            title: '预约ID',
            description: this.state.subscribeId
        },
        {
            title: '病人ID',
            description: this.state.patientId
        },
        {
            title: '医生ID',
            description: this.state.subscribeChoice
        },
        {
            title: '预约时间',
            description: this.state.subscribeTime
        },
        {
            title: '预约状态',
            description: this.state.subscribeState == 0 ? "状态0" : 
                this.state.subscribeState == 1 ? "状态1" :
                this.state.subscribeState == 2 ? "状态2" :"状态3" 
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
export default SubsInf;