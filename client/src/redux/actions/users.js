import axios from '../../config/axios'

export const StartLogin = (formData, props) => {
    console.log('login')
    return(dispatch) => {
        axios.post('/users/login' , formData)
            .then(response => {
                console.log(response.data)
                axios.defaults.headers['x-auth'] = response.data.token
                localStorage.setItem('token' , response.data.token)
                props.history.push("/")
                dispatch(getUser())
            })
            .catch(err => console.log(err))
    }
}
export const getUser = () => {
    console.log('called')
    return(dispatch) => {
        axios.get('/users/account')
            .then(response => dispatch(addUser(response.data)))
            .catch(err => console.log(err))
    }
}

export const addUser =  (user) => {
    return {
        type : 'ADD_USER',
        payload : user
    }
}

export  const StartRemoveUser = () => {
    console.log('logout called')
    return(dispatch) => {
        axios.delete('/users/logout')
            .then(response => {
                axios.defaults.headers['x-auth'] = ''
                dispatch(removeUser())
                localStorage.clear()
            })
            .catch(err => console.log(err))
    }
}

export const removeUser = () => {
    return {
        type : 'REMOVE_USER',
        payload : {}
    }
}


export const StartEditUser = (user , id)  => {
    return(dispatch) => {
        axios.put(`/users/${id}` , user)
            .then(response => {
                dispatch(editUser(response.data))
            })
    }
}

export const editUser = (user) => {
    return {
        type : 'UPDATE_USER' ,
        payload : user
    }
}