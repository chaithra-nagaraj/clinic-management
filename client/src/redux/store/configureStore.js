import { combineReducers , createStore , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import  usersReducers  from '../reducers/users'
import doctorReducers from '../reducers/doctor';
import adminReducers from '../reducers/admin'
import doctorsReducers from '../reducers/doctors';

const confgureStore = () => {
    const store = createStore(combineReducers({
        user : usersReducers ,
        doctor : doctorReducers,
        doctors : doctorsReducers,
        adminDoctors : adminReducers
    }) , applyMiddleware(thunk))
    return store
}

export default confgureStore