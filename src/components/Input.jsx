import React from 'react';

function Input({name, value,handleChange}) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className={"block text-sm font-medium text-gray-600"}>
                {name.toUpperCase()}
            </label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className={"mt-1 p-2 w-full border rounded-md"}
                placeholder={`Enter your ${name}`}
            />
        </div>
    );
}

export default Input;