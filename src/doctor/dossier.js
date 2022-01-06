import { Button, TextArea } from "antd";
import {useNavigate} from "react-router-dom";
import { postDoss } from "../api";
function Dossier(props) {
    const nav = useNavigate();
    const handleClick = (e) => {
        postDoss(props.upperState.doctorId, props.upperState.token, props.upperState.patientId).then({
            nav("doctor/consultation");
        })
    }
    const handleChange = (e) => {
        this.props.upperSetState({dossier: e.target.value});
    }

    const handleBack = (e) => {
        nav("doctor/consultation")
    }
    return <div>
        <TextArea  value = {props.upperState.dossier} autoSize = {{minRows: 4, maxRows: 6}} showCount maxLength={500} onChange={handleChange} />
        <Button onClick={handleBack}>返回<Button/>
        <Button onClick = {handleClick}>确认病历</Button>
    </div>
}