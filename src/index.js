import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import './style/index.css'

ReactDOM.render(
    <HashRouter>
     <App />
    </HashRouter>
, document.getElementById('root'))
