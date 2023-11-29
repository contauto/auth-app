import React from 'react';

function Button({name}) {
    return (
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
        >
            {name}
        </button>
    );
}

export default Button;