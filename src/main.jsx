import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
//import { ToastContainer } from "react-toastify";
import './components/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './components/LoginComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginComponent />
  </React.StrictMode>
)
