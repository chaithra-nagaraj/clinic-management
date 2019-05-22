import axios from '../../config/axios'

export const StartGetPatients = () => {
    return(dispatch) => {
        axios.get('/patient')
            .then(response => dispatch(addPatients(response.data)))
            .catch(err => console.log(err))
    }
}

export const addPatients = (patients) => {
    return {
        type : 'ADD_PATIENTS' , 
        payload : patients
    }
}