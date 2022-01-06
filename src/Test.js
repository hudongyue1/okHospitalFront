import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {InputNumber,Radio, Divider, Table } from 'antd'
import PageLogin from './login.js';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

// function useT(c) {
//     const [co, setCo] = useState(0);
//     useEffect(()=>{setCo(co + 1)});
//     return co;
// }
// function useT1(c) {
//     const [co, setCo] = useState(0);
//     useEffect(()=>{setCo(co - 1)});
//     return co;
// }
// function T(props){
//     const coo = useT();
//     return (<span>T0 {coo+props.kind}</span>);
// }
// function T1(props){
//     const coo = useT();
//     return (<span>T1 {coo-1}</span>);
// }

// class Test extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: 0};
//     }
//     handleClick(e){
//         this.setState({count: this.state.count + 1});
//     }
//     render() {
//         return (
//         <div>
//             <h1>count is {this.state.count}</h1>
//             {this.state.count%2 == 0 ?(<T kind= {-1000000} ></T>):(<T kind = {1000000}> </T>)}
//             <button onClick = {this.handleClick.bind(this)}></button>
//         </div>
//         );
//     }
// }
// export default Test;


const Test = (props) => {
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
        title: '药品费用',
        dataIndex: 'medicinePrice',
    },
    {
        title: '药品描述',
        dataIndex: 'medicineDescription',
    },
    {
        title: '库存数量',
        dataIndex: 'medicineDescription',
    },
    {
        title: "选择购买数量",
        dataIndex: "chooseNums"
    }
    ];
    var medicineListInfor = [
        {
            "medicineListId": "ml1",
            "medicineName": "jlksdaf",
            "medicineNum": 68,
            "medicinePrice": 20.0,
            "medicineDescription": "sdfljlhsldfa"
        },
        {
            "medicineListId": "ml2",
            "medicineName": "sdafa",
            "medicineNum": 69,
            "medicinePrice": 19.0,
            "medicineDescription": "sdafkjhasdfsd"
        },
        {
            "medicineListId": "ml3",
            "medicineName": "safhsdfa",
            "medicineNum": 29,
            "medicinePrice": 29.0,
            "medicineDescription": "asdfsdadkhfsa"
        },
        {
            "medicineListId": "ml4",
            "medicineName": "asfsdfa",
            "medicineNum": 345,
            "medicinePrice": 12.2,
            "medicineDescription": "fafas"
        }
    ]
    
    let pos = 0;
    // let f = new Function("num", "console.log(this.props);");
    // console.log(this);
    // f  = f.bind(this);
    // f(1)
    medicineListInfor[0]['func'] = (e) => {props.upperSetState({0: e}); console.log('Props are:');console.log(props.upperState)}
    medicineListInfor[1]['func'] = (e) => {props.upperSetState({1: e}); console.log('Props are:');console.log(props.upperState)}
    medicineListInfor[2]['func'] = (e) => {props.upperSetState({2: e}); console.log('Props are:');console.log(props.upperState)}
    medicineListInfor[3]['func'] = (e) => {props.upperSetState({3: e}); console.log('Props are:');console.log(props.upperState)}
    for(pos in medicineListInfor) {
        medicineListInfor[pos]['key'] = pos;
        medicineListInfor[pos]["chooseNums"] = <InputNumber min={0} max={medicineListInfor[pos]['medicineNum']} defaultValue={0} onChange={medicineListInfor[pos]['func']}/>
    }
    
    const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
    };


  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      <Table
        columns={columns}
        dataSource={medicineListInfor}
      />
    </div>
  );
};

export default Test;
