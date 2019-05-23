import axios from "../../config/axios";

export const StartGetCategories = () => {
    return(dispatch) => {
        axios.get('/category')
            .then(response => {
                console.log(response.data)
                dispatch(addCategories(response.data))
            })
            .catch(err => console.log(err))
        }
}

export const addCategories = (categories) => {
    return{
        type  : 'SET_CATEGORIES' ,
        payload : categories
    }
}

export const StartAddCategory = (category) => {
    return(dispatch) => {
        axios.post('/category' , category)
            .then(response => {
                console.log(response.data)
                dispatch(addCategory(response.data))})
            .catch(err => console.log(err))
    }
}

export const addCategory = (category) => {
    return {
        type : 'ADD_CATEGORY',
        payload : category
    }
}

export const removeCategory = () => {
    return {
        type : 'REMOVE_CATEGORY' ,
        payload : []
    }
}