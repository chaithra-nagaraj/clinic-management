const patientsInitialState = []
const patientsReducers = (state = patientsInitialState , action ) => {
    switch(action.type){
        case 'ADD_PATIENTS': 
            return [...action.payload] 
        default :
            return [state]
    }
}

export default patientsReducers