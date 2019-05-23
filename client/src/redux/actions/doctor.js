import axios from '../../config/axios'


export const StartAddDoctor = (doctor) => {
    return(dispatch) => {
        axios.post('/doctor' , doctor)
            .then(response => console.log('succesfully added'))
            .catch(err => console.log(err))
    }
}

export const StartGetDoctor = () => {
    return(dispatch) => {
        axios.get(`/users/doctor`)
            .then(response => dispatch(getDoctor(response.data)))
            .catch(err => console.log(err))
    }
}

export const getDoctor = (doctor) => {
    return{
        type : 'GET_DOCTOR' , 
        payload : doctor
    }
}



export const removeDoctor = () => {
    return {
        type : 'REMOVE_DOCTOR',
        payload : {}
    }
}

export const StartEditDoctor = (id , body) => {
    return(dispatch) => {
        axios.put(`/doctor/${id}` ,body )
            .then(response => (console.log(response.data)))
            .catch(err => console.log(err))
    }
}