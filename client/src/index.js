import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { getUser} from './redux/actions/users'
import { StartGetDoctor } from './redux/actions/doctor'
import { StartGetDoctors } from './redux/actions/doctors'

import configureStore from './redux/store/configureStore'
const store = configureStore()


store.subscribe(()=> {
    console.log(store.getState())
})

console.log(store.getState())


store.dispatch(getUser())
store.dispatch(StartGetDoctors())
 store.dispatch(StartGetDoctor())

const app = (
    <Provider store = {store}>
        <App/>
    </Provider>
)
ReactDOM.render( app , document.getElementById('root'));

