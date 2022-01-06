import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { getMedicineList, getCheckList,getMedsD } from '../api';
import MedicineTableList from './medicineTableList';
import Dossier from './dossier';
import PatientInf from './patientInf';
import { getPat } from '../api';
import MainPage from './mainPage';
class Doctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE4NzIzMjYsInN1YiI6InB0cHQxIiwiaWF0IjoxNjQxMjY3NTI2fQ.Z3hy1kyH_lnglPEQph1N50ekS6qPBtNAdGmUvh3qPpg" , patientId: "", registerTime: ""};
        getPat(this.state.token).then((res) => {
            console.log(res);
            if(JSON.stringify(res.data.data) != "{}"){
                this.setState({patientId:res.data.data.patientInfo.patientId, registerTime:res.data.data.patientInfo.registerTime});
            }
        })
    }

    render() {
        return <div>

            <Routes>
                <Route path = "/" element = {<MainPage/>}/>
                <Route path = "/medicine" element = {   <div>   <PatientInf upperSetState = {this.setState.bind(this)} upperState = {this.state}/>  <MedicineTableList upperSetState = {this.setState.bind(this)} upperState = {this.state}  />  </div> }   />
                <Route path = "/dossier" element = {   <div>   <PatientInf upperSetState = {this.setState.bind(this)} upperState = {this.state}/>   <Dossier upperSetState = {this.setState.bind(this)} upperState = {this.state}  />  </div>   }   />
                <Route path = "/dossier/doctor" element = {<MainPage/>}/>
            </Routes> 
        </div>
    }
}
export default Doctor;