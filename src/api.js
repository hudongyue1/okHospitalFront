import instance from "./AxiosInstance";

const getSubs = (patientID, token) => {
    return instance.get("charger/getSubscribe/?patientId="+patientID+"&token="+token);
}
const getDeps = (token) => {
    return instance.get("getDepartmentList/?token="+token);
}
const getExps = (token) => {
    return instance.get("getExpertList/?token="+token);
}
const getChar = (tableId, token) => {
    console.log("charger/getChargeTable?tableId="+tableId+"&token="+token);
    return instance.get("charger/getChargeTable?tableId="+tableId+"&token="+token);
}
const postReg = (data, token) => {
    var formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key])
    }
    console.log("The data is:")
    console.log(data);
    formData.append("token", token);
    console.log("form data is:")
    console.log(token);
    return instance.post("charger/sendRegister",formData);
}
const postChar = (tableId, token, chargerId) => {
    var formData = new FormData();
    formData.append("tableId",tableId);
    formData.append("chargerId","cg1");
    formData.append("token",token);
    console.log("sending table...")
    return instance.post("charger/sendChargeTableState", formData);
}
const getLogin = (userId, password) => {
    console.log("In login: userId" + userId + "\npassword:" + password);
    return instance.get("login/?userId="+userId+"&password="+password);
}

const getMeds = (token) => {
    return instance.get("pharmacist/getAMedicineTable?token="+token);
} 

const postPha = (tableId, token, pharmacistId) => {
    var formData = new FormData();
    formData.append("tableId",tableId);
    formData.append("pharmacistId",pharmacistId);
    formData.append("token",token);
    return instance.post("pharmacist/sendMedicineTableState", formData);
}

const getMedsD = (token) => {
    return instance.get("dispenser/getAMedicineTable?token="+token);
}
const postDis = (tableId, token, dispenserId, state) => {
    var formData = new FormData();
    formData.append("tableId",tableId);
    formData.append("dispenserId",dispenserId);
    formData.append("state",state);
    formData.append("token",token);
    console.log("form data")
    console.log(state)
    return instance.post("dispenser/sendMedicineTableState", formData);
}

const postWithdraw = (medicineTableId, token) => {
    var formData = new FormData();
    console.log("while post withdraw:");
    console.log(medicineTableId);
    console.log(token);
    formData.append("medicineTableId", medicineTableId);
    formData.append("token", token);
    return instance.post("dispenser/sendWithdrawMedicineTable", formData);
}

const getMTable = (tableId, token) => {
    return instance.get("dispenser/getAMedicineTableWithID?tableId="+tableId+"&token="+token);
}

const postDoss = (doctorId, token, patientId) => {
    var formData = new FormData();
    console.log("while post dossier:");
    console.log(doctorId);
    console.log(token);
    console.log(patientId);
    formData.append("doctorId", doctorId);
    formData.append("token", token);
    formData.append("patientId", patientId);
    return instance.post("doctor/sendDossierTable", formData);
}

const getMedicineList = (token) => {
    return instance.get("doctor/getMedcineList?token="+token);
}

const getCheckList = (token) => {
    return instance.get("doctor/getCheckList?token="+token);
}

const getPat = (token) => {
    return instance.get("doctor/getAPatient?doctorId=dt2&token="+token);
}

export {getSubs,getDeps,getExps,getChar,postChar,postReg, getMeds, postPha, getMedsD, postDis,getLogin, postWithdraw, getMTable, postDoss, getMedicineList, getCheckList, getPat}