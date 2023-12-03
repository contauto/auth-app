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

    const disabled =
        validationErrors.name !== "" ||
        validationErrors.username !== "" ||
        validationErrors.mail !== "" ||
        validationErrors.password !== "" ||
        formData.name === "" ||
        formData.username === "" ||
        formData.mail === "" ||
        formData.password === "";

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (e.target.name === "name") {
            const validationResult = e.target.value.length > 0;
            setValidationErrors({
                ...validationErrors,
                name: validationResult ? "" : "Name is required",
            });
        }

        if (e.target.name === "username") {
            const validationResult = e.target.value.length > 4;
            setValidationErrors({
                ...validationErrors,
                username: validationResult ? "" : "Username size must be between 5 and 64",
            });
        }

        if (e.target.name === "password") {
            const validationResult = validatePassword(e.target.value);
            setValidationErrors({
                ...validationErrors,
                password: validationResult.isValid ? "" : validationResult.feedback,
            });
        }

        if (e.target.name === "mail") {
            const validationResult = e.target.value.includes("@ebebek.com");
            setValidationErrors({
                ...validationErrors,
                mail: validationResult ? "" : "ebebek mail is required",
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, formData, {
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


    const validatePassword = (password) => {
        const isStrongEnough = password.length >= 6;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return {
            isValid: isStrongEnough && hasUppercase && hasLowercase && hasDigit && hasSpecialChar,
            feedback: "Password should contain at least 6 character and include at least one uppercase letter, one lowercase letter, one digit and one special character",
        };
    };

    return (
        <Div>
            <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                <Input name="name" validation={validationErrors.name} value={formData.name}
                       handleChange={handleChange}/>
                <Input name="username" validation={validationErrors.username} value={formData.username}
                       handleChange={handleChange}/>
                <Input name="mail" validation={validationErrors.mail} value={formData.mail}
                       handleChange={handleChange}/>
                <Input type="password" name="password" validation={validationErrors.password} value={formData.password}
                       handleChange={handleChange}/>
                <Button disabled={disabled} name="Sign Up"/>
            </form>
        </Div>
    );
}

export default SignUp;