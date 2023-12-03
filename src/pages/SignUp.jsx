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
        mail: '',
        password: '',
        roles: ["ROLE_USER"],
    });

    const [validationErrors, setValidationErrors] = useState({
        name: '',
        username: '',
        mail: '',
        password: '',
    });
    console.log(validationErrors);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, formData,{
                headers: {
                    "Accept-Language": "en-US,en;q=0.8",
                }
            }).then(() => {
                navigate('/login');
            })
            ;
        } catch
            (error) {
            setValidationErrors(error.response.data);
        }
    }

    return (
        <Div>
            <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                <Input name="name" validation={validationErrors.name} value={formData.name} handleChange={handleChange}/>
                <Input name="username" validation={validationErrors.username} value={formData.username} handleChange={handleChange}/>
                <Input name="mail" validation={validationErrors.mail} value={formData.mail} handleChange={handleChange}/>
                <Input type="password" name="password" validation={validationErrors.password} value={formData.password} handleChange={handleChange}/>
                <Button name="Sign Up"/>
            </form>
        </Div>
    );
}

export default SignUp;