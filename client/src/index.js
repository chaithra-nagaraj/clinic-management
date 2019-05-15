import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { getUser} from './redux/actions/users'

import configureStore from './redux/store/configureStore'
const store = configureStore()


store.subscribe(()=> {
    console.log(store.getState())
})

console.log(store.getState())

store.dispatch(getUser())

const app = (
    <Provider store = {store}>
        <App/>
    </Provider>
)
ReactDOM.render( app , document.getElementById('root'));

