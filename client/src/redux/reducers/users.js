import doctorsReducers from '../reducers/doctor'

const userInitialState = {}
const usersReducers = (state = userInitialState , action ) => {
    switch(action.type){
        case 'ADD_USER' : 
            return {...action.payload}
        case 'REMOVE_USER' : 
            return action.payload
        case 'UPDATE_USER' : 
            return {...action.payload}
        default : 
            return { ...state}
    }
}

export default usersReducers