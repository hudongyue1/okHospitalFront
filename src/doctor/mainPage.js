import { useNavigate } from "react-router-dom"
import {Button} from 'antd'
function MainPage(props) {
    const nav = useNavigate();
    return <div><Button onClick = {() => {nav("/doctor/medicine")}}>开药方</Button><br/><Button onClick = {() => { nav("dossier") }}>填病历</Button></div>
}
export default MainPage;