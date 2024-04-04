import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/navbar/Navbar.jsx'
import Root from './Root.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Root />}>
        <Route index={true} element={<App />} />
      </Route>   
    </Routes>
  </BrowserRouter>
)
