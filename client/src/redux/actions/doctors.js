import axios from 'axios'

export const StartGetDoctors = () => {
    return(dispatch) => {
        axios.get('http://localhost:3005/doctor')
            .then(response => dispatch(addDoctors(response.data)))
            .catch(err => console.log(err)
            )
    }
}

export const addDoctors = (doctors) => {
    return {
        type : 'ADD_DOCTORS',
        payload : doctors 
    }
}