import axios from '../../config/axios'
import { removeDoctor } from './doctor'
import { Redirect } from 'react-router-dom'

export const StartLogin = (formData , props) => {
    console.log('login')
    console.log(props)
    return(dispatch) => {
        axios.post('/users/login' , formData)
            .then(response => {
                axios.defaults.headers['x-auth'] = response.data.token
                localStorage.setItem('token' , response.data.token)
                dispatch(addUser(response.data.user))
                props.history.push('/')
               
               
            })
            .catch(err => console.log(err))
    }
}
export const getUser = () => {
    console.log('called')
    return(dispatch) => {
        axios.get('/users/account')
            .then(response => { dispatch(addUser(response.data))
              
                                })
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
                localStorage.clear()
                dispatch(removeUser())
                dispatch(removeDoctor())
    
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





// export const StartEditUser = (user , id)  => {
//     return(dispatch) => {
//         axios.put(`/users/${id}` , user)
//             .then(response => {
//                 dispatch(editUser(response.data))
//             })
//     }
// }

// export const editUser = (user) => {
//     return {
//         type : 'UPDATE_USER' ,
//         payload : user
//     }
// }