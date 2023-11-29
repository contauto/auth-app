import React, {useState} from 'react';
import Div from "../components/Div.jsx";
import axios from "axios";

function Index() {
    const jwt = localStorage.getItem('jwt');

    const url = 'http://localhost:1035/greeting/v4';

    const [message, setMessage] = useState('')

    const apiCall = async () => {
        await axios.get(url, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        }).then((res) => {
            setMessage(res.data)
        }).catch((err) => {
            setMessage(err.message)
        })
    }

    return (
        <Div>
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Home</h2>
                <p className="text-lg font-semibold mb-4">{message}</p>
                <div className="flex flex-col gap-4 ">
                    <button onClick={() => {
                        apiCall()
                    }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Try your token!
                    </button>
                    <button onClick={() => {
                        localStorage.removeItem('jwt')
                    }
                    } className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Logout
                    </button>
                </div>
            </div>
        </Div>
    );
}

export default Index;