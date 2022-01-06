const columns = [
{
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
},
{
    title: 'Age',
    dataIndex: 'age',
},
{
    title: 'Address',
    dataIndex: 'address',
},
];
const handleChange = (e) => {
    console.log(e.target);
}
const but = <InputNumber min={1} max={12} defaultValue={3} onChange = {handleChange}/>;
const data = [
{
    key: '1',
    name: 'John Brown',
    age: but,
    address: 'New York No. 1 Lake Park',
},
{
    key: '2',
    name: 'Jim Green',
    age: but,
    address: 'London No. 1 Lake Park',
},
{
    key: '3',
    name: 'Joe Black',
    age: but,
    address: 'Sidney No. 1 Lake Park',
},
{
    key: '4',
    name: 'Disabled User',
    age: but,
    address: 'Sidney No. 1 Lake Park',
},
]; // rowSelection object indicates the need for row selection

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

const CheckList = () => {
const [selectionType, setSelectionType] = useState('checkbox');
return (
    <div>
    <Radio.Group
        onChange={({ target: { value } }) => {
        setSelectionType(value);
        }}
        value={selectionType}
    >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
    </Radio.Group>

    <Divider />

    <Table
        rowSelection={{
        type: selectionType,
        ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
    />
    </div>
);
};