const categoryInitialState = []
const categoryReducers = (state = categoryInitialState , action) => {
    switch(action.type){
        case 'SET_CATEGORIES' :
            return [...action.payload]
        case 'ADD_CATEGORY' : 
            return [...state , action.payload]
        case 'REMOVE_CATEGORY' :
            return []
        default :
            return [state]
    }
}

export default categoryReducers