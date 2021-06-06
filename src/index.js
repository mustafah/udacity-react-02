import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import App from './app'
import middlewares from './middlewares'
import reducers from './reducers'


ReactDOM.render(
    <Provider store={createStore(reducers, middlewares)}>
        <App />
    </Provider>, 
document.getElementById('root'))
