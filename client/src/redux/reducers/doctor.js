const initialDoctorState = {}
const doctorReducers = (state = initialDoctorState , action ) => {
    switch(action.type){
        case 'GET_DOCTOR' : 
            return {...action.payload}
        case 'REMOVE_DOCTOR' : 
            return action.payload
        default : 
            return {...state}
    }
}

export default doctorReducers