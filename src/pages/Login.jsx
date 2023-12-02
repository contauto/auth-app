import {useState} from 'react';
import axios from 'axios';
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import Div from "../components/Div.jsx";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const url = 'http://localhost:1035/auth/generate'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const saveLocalStorageToJwt = (jwt) => {
        localStorage.setItem('jwt', jwt);
    }

    const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await axios.post(url, formData,{
                    headers: {
                        "Accept-Language": "en-US,en;q=0.8",
                    }
                }).then((res) => {
                    saveLocalStorageToJwt(res.data);
                }).then(()=>{
                    navigate('/')
                })
                ;
            } catch
                (error) {
                console.error('Error submitting form:', error);
            }
        }
    ;

    return (
        <Div>
            <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <Input name="username" value={formData.username} handleChange={handleChange}/>
                <Input name="password" value={formData.password} handleChange={handleChange}/>
                <Button name="login"/>
            </form>
        </Div>

    );
};

export default Login;
