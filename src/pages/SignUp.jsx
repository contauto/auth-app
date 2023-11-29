import React, {useState} from 'react';
import axios from "axios";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import Div from "../components/Div.jsx";

function SignUp() {

    const navigate = useNavigate();

    const url = 'http://localhost:1035/auth/create-user';

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        roles: ["ROLE_USER"],
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, formData).then(() => {
                navigate('/login');
            })
            ;
        } catch
            (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <Div>
            <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                <Input name="name" value={formData.name} handleChange={handleChange}/>
                <Input name="username" value={formData.username} handleChange={handleChange}/>
                <Input name="password" value={formData.password} handleChange={handleChange}/>
                <Button name="Sign Up"/>
            </form>
        </Div>
    );
}

export default SignUp;