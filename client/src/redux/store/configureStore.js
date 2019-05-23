import { combineReducers , createStore , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import  usersReducers  from '../reducers/users'
import doctorReducers from '../reducers/doctor';
import adminReducers from '../reducers/admin'
import doctorsReducers from '../reducers/doctors';
import categoryReducers from '../reducers/category';
import patientReducers from '../reducers/patient';
import patientsReducers from '../reducers/patients'

const confgureStore = () => {
    const store = createStore(combineReducers({
        user : usersReducers ,
        doctor : doctorReducers,
        doctors : doctorsReducers,
        adminDoctors : adminReducers,
        categories : categoryReducers,
        patient : patientReducers,
        patients : patientsReducers
    }) , applyMiddleware(thunk))
    return store
}

export default confgureStore