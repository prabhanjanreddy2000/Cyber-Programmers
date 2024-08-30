import React from "react";
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import App from './components/App'
import LoginPage from './components/LoginPage'

var root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(
        <>
        <App/>
        </>
    )