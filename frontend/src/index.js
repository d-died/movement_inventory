import React from 'react'
import * as ReactDOMCLient from 'react-dom/client'
import App from "./App"
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'


ReactDOMCLient.createRoot(document.querySelector('#root')).render(
    <Router>
        <App />
    </Router>
)