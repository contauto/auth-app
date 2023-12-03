import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./pages/Index.jsx";
import SignUp from "./pages/SignUp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>

        </BrowserRouter>
    </React.StrictMode>,
)
