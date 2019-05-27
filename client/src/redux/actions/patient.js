import axios from "../../config/axios";

export const StartAddPatient = (patient) => {
    return(dispatch) => {
        axios.post('/patient' , patient)
            .then(response => {
                console.log(response.data)
                dispatch(addPatient(response.data))
                
            })
            .catch(err => console.log(err))
    }
}

export const addPatient = (patient) => {
    return {
        type : 'ADD_PATIENT' ,
        payload : patient
    }
} 

