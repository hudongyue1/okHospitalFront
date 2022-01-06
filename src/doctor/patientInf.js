import { useState } from "react";
import { getPat } from "../api";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE4NzIzMjYsInN1YiI6InB0cHQxIiwiaWF0IjoxNjQxMjY3NTI2fQ.Z3hy1kyH_lnglPEQph1N50ekS6qPBtNAdGmUvh3qPpg";
function PatientInf(props) {

    
    return (
        <div>
        <h2>   病人: {props.upperState.patientId}</h2>
        <h2>挂号时间: {props.upperState.registerTime}</h2>
        </div>
    );
}
export default PatientInf;