import React from 'react'
import { getMedicineList, getCheckList,getMedsD } from '../api';
class Doctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE4NzIzMjYsInN1YiI6InB0cHQxIiwiaWF0IjoxNjQxMjY3NTI2fQ.Z3hy1kyH_lnglPEQph1N50ekS6qPBtNAdGmUvh3qPpg";
        getMedicineList(token).then((res) => {
            console.log("MedicineList");
            console.log(res);
        });
        getCheckList(token).then((res) => {
            console.log("CheckList");
            console.log(res);
        })
        return <span>Testing</span>
    }
}
export default Doctor;