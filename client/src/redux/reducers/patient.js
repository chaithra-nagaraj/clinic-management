const patientInitialState = {}
const patientReducers = (state =  patientInitialState , action )=> {
    switch(action.type) {
        case 'ADD_PATIENT' :
            return {...action.payload}
        default : 
            return {...state}
    }
}


export default patientReducers