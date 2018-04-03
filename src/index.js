import React from 'react'
import ReactDOM from 'react-dom'
import ScreenRoot from './screens/Root'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import './style/index.css'

ReactDOM.render(
    <HashRouter>
     <ScreenRoot />
    </HashRouter>
, document.getElementById('root'))
