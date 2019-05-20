import axios from "../../config/axios";

export const getAdminDoctors  = () => {
    return(dispatch) => {
        axios.get('/admin')
            .then(response => dispatch(addDoctors(response.data)))
    }
}

export const addDoctors = (adminDoctors) => {
    return {
        type : 'GET_DOCTORS',
        payload : adminDoctors
    }
}
export const StartEditAdminDoctor = (id , approval) => {
    console.log('approval' , approval)
    return(dispatch)=> {
        axios.put(`/admin/${id}` , approval )
            .then(response => console.log('successfully approved'))
            .catch(err => console.log(err))
    }
}
export const StartDeleteDoctor = (id) => {
    return(dispatch) => {
        axios.delete(`/admin/${id}`)
            .then(response => console.log('deleted the doctor successfully'))
            .catch(err => console.log(err))
    }
}
export const removeDoctors = () => {
    return {
        type : 'REMOVE_DOCTORS',
        payload : []
    }
}