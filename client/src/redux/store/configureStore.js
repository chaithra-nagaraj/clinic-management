import { combineReducers , createStore , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import  usersReducers  from '../reducers/users'
const confgureStore = () => {
    const store = createStore(combineReducers({
        user : usersReducers
    }) , applyMiddleware(thunk))
    return store
}

export default confgureStore