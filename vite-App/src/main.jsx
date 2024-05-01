import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import FindAFlight from './Pages/FindAFlight.jsx'
import { Home, Login } from '@mui/icons-material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
