import React, { useEffect, useState } from 'react';
import {InputNumber,Radio, Divider, Table } from 'antd'
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
const MedicineTableList = (props) => {
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

export default MedicineTableList;