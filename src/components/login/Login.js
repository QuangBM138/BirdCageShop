import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import UseToken from '../handleToken/UseToken'
import axios from 'axios'
import { useCookies, Cookies } from 'react-cookie'
import jwtDecode from 'jwt-decode'


export default function Login() {
    const navigate = useNavigate()
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const { getToken, setToken } = UseToken()
    console.log(getToken() == null)

    if (getToken() != null) {
        return <Navigate to="/" replace />
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const data = {
            phoneNumber: phoneNumber,
            password: password
        }
        fetch(
            "http://localhost:5000/api/v1/account/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(res => {
                if (res.status == "success") {
                    console.log((res.token))
                    setToken(res.token)
                } else {
                    setMessage(res.message)
                }

            })

            .catch(error => console.log(error))
        // console.log(Cookies.get("user"))
    }
    return (
        <div className='login_container'>
            <div className='user_acount'>


                <div className='user_signin'>
                    <div className='input_text'>
                        <input
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type='text' placeholder='Phone' className='email_input' />
                    </div>
                    <div className='input_text'>

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            placeholder='Password'
                            className='password_input' />
                    </div>
                    <div className='btn_design'>
                        <button
                            onClick={handleLogin}
                            className='signin_bt'>
                            Sign in
                        </button>
                        {message}
                    </div >
                    <div className='link_a'>
                        <Link to="/createaccount" className='a_link'>Create Account</Link>
                        <a className='a_link'>Return store</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
