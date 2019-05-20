const adminDoctorsInitialState = []
const adminReducers = (state = adminDoctorsInitialState , action) => {
    switch(action.type){
        case 'GET_DOCTORS' :
            return [...action.payload]
        case 'REMOVE_DOCTORS': 
            return [action.payload]
        default :
            return [...state]
    }
}

export default adminReducers