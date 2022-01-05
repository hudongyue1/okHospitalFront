import { Button, Input, Col } from "antd";
import MedicineList from "../pharmacist/medicineList";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import {getMTable, postWithdraw} from "../api";
function GetWithdrawTable(props) {
    const [tableID, setTableID] = useState("");
    const [inputVal, setInputVal] = useState("");
    const nav = useNavigate();
    const getWithdrawTable = ((e) => {
        // use nav after get id!!
        getMTable(inputVal,props.upperState.token).then( (res) =>{
            console.log("the withdraw table:")
            console.log(res);
            props.upperSetState({medicineTableArray: res.data.data.medicineTableArray, data: res.data.data, medicineTableId: inputVal});
            console.log(props.upperState);
            nav("/withdraw/withdrawTable")
        })
    });
    const handleChange = (e) => {
        console.log(inputVal)
        setInputVal(e.target.value);
    }
    return (<div>
        <span>input the id of medicine table here!</span> <br/>
        <Col span={8} align={'center'}  offset={7}>
            <Input size= "large" value ={inputVal}  style={{width: "400px"}} onChange = {handleChange}/>
        </Col>
        <button onClick={getWithdrawTable}> 查询账单 </button> <br/>
    </div>);
}

function ConfirmWithdraw(props) {
    const nav = useNavigate();
    const handleClick = () => {
        postWithdraw(props.upperState.medicineTableId, props.upperState.token).then((res) => {
            nav("/withdraw");
        })
    }
    return (<div>
        <MedicineList list = {props.upperState.medicineTableArray}></MedicineList>
        <Button onClick={handleClick}>确认退药</Button>
    </div>);
}
export  {GetWithdrawTable, ConfirmWithdraw}