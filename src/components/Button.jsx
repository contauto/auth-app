import React from 'react';

function Button({name, disabled}) {
    return (
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
            disabled={disabled}
        >
            {name}
        </button>
    );
}

export default Button;