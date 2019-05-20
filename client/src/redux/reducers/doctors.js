const initialDoctorsState = []
const doctorsReducers = (state = initialDoctorsState , action ) => {
    switch(action.type){
       case 'ADD_DOCTORS': 
        return [...action.payload]
        default : 
            return [...state]
    }
}

export default doctorsReducers