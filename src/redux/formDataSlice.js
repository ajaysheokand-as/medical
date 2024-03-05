import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patientData : 
        {
        firstName: '',
        lastName: '',
        patientName:'',
        dateOfBirth: '',
        age: '',
        gender: 'NA',
        email: '',
        phoneNumber: '',
        zipCode: '',
        medicalHistory: '',
        referringDoctor: '',
        collection: '',
    },
    reportData: []
}

export const formSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        setPatientData: (state, action) => {
            state.patientData[action.payload.name] = action.payload.value
        },
        addReportData: (state, action) => {
            console.log("Action payload:", action.payload);
        
            if (Array.isArray(action.payload)) {
                state.reportData = action.payload.filter((data) => data);
            } else {
                console.error("Invalid report data format");
            }
        }
    }
});

export const { setPatientData, addReportData } = formSlice.actions;
export default formSlice.reducer;
