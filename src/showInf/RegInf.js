import {Table} from 'antd';
const RegInf = (props) =>   {
    
    const columns = [
    {
        title: '医生ID',
        dataIndex: 'doctorId',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '部门',
        dataIndex: 'departmentId',
    },
    {
        title: '性别',
        dataIndex: 'gender',
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
    {
        title: '是否是专家',
        dataIndex: 'isExpert',
    },
    
    ];
    // var data = props.data
    var data = [
        {
            "doctorId": "dt1",
            "departmentId": "dp1",
            "gender": 0,
            "age": 34,
            "isExpert": 1,
            "name": "fads",
            "password": "fasd"
        },
        {
            "doctorId": "dt1234",
            "departmentId": "dp3",
            "gender": 0,
            "age": 12,
            "isExpert": 0,
            "name": "123",
            "password": "23"
        },
        {
            "doctorId": "dt2",
            "departmentId": "dp2",
            "gender": 0,
            "age": 32,
            "isExpert": 1,
            "name": "asf",
            "password": "asdf"
        }
    ]; // rowSelection object indicates the need for row selection
    
    let count= 0;
    data = data.map((item)=>{
        item.gender = item.gender?"女":"男";
        item.isExpert = item.isExpert?"是":"否";
        item['key'] = count;
        count = count + 1;
        return item;
    })


    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            console.log(props);
            let re = props.upperState.registrationInf;
            re["registerChoice"] = selectedRows[0]["doctorId"];
            props.upperSetState({registrationInf: re});
        },
        // getCheckboxProps: (record) => ({
        //     disabled: record.name === 'Disabled User',
        //     // Column configuration not to be checked
        //     name: record.name,
        // }),
    }; 

    return (
        <div>
          <Table
            rowSelection={{
              type: "radio",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
          />
        </div>
      );
}
export default RegInf;