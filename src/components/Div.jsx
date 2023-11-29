import React from 'react';
import Navbar from "./Navbar.jsx";

function Div({children}) {
    return (
        <div>
            <Navbar/>
            <div className="flex items-center justify-center min-h-screen">
                {children}
            </div>
        </div>

    );
}

export default Div;