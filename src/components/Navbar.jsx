// src/Navbar.js
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">JWT</Link>
                <div className="space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/signup" className="text-white">Sign Up</Link>
                    <Link to="/login" className="text-white">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
