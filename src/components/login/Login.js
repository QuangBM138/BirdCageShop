import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import UseToken from '../handleToken/UseToken'
import CircularProgress from '@mui/material/CircularProgress';


export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const { setToken } = UseToken()
    const [isLoading, setLoading] = useState(false)
    const [checkValidPhoneNum, setValidPhoneNum] = useState(true)
    // on change phone number

    const regexPhoneNumber = phone => {
        const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        return phone.match(regexPhoneNumber) ? true : false
    }
    const handleChangePhone = e => {
        setPhoneNumber(e.target.value.trim())
        regexPhoneNumber(e.target.value.trim()) ? setValidPhoneNum(true) : setValidPhoneNum(false)
    }

    // on change password
    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    // login
    const handleLogin = (e) => {
        e.preventDefault()
        if (!phoneNumber || !password) {
            setMessage("We need your phone number and password")
            return
        }
        const data = {
            phoneNumber: phoneNumber,
            password: password
        }
        setLoading(true)
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
                setLoading(false)
                if (res.status == "success") {
                    console.log((res.token))
                    setToken(res.token)
                } else {
                    setMessage(res.message)
                }

            })

            .catch(error => {
                throw error
            })
    }
    return (
        <div className='login_container'>
            <div className='user_acount'>
                <div className='user_signin'>
                    <h1 style={{ textAlign: "center" }}>Sign In</h1>
                    <div className='input_text'>
                        <input
                            value={phoneNumber}
                            onChange={handleChangePhone}
                            type='text' placeholder='Phone' className='email_input' />
                        <div className='invalid-phone'>
                            {checkValidPhoneNum ? "" : "Invalid phone number format"}
                        </div>

                    </div>
                    <div className='input_text'>
                        <input
                            value={password}
                            onChange={handleChangePassword}
                            type='password'
                            placeholder='Password'
                            className='password_input' />
                    </div>
                    <div className='btn_design'>
                        <button
                            style={{ display: "flex", justifyContent: "center", width: "100px" }}
                            onClick={handleLogin}
                            className='signin_bt'>
                            {
                                isLoading
                                    ?
                                    <CircularProgress style={{ width: "20px", height: "20px", color: "#fff" }} />
                                    :
                                    "Sign in"
                            }
                        </button>
                        <div style={{ color: "red", marginTop: "10px" }}>{message}</div>
                    </div >
                    <div className='link_a'>
                        <Link to="/createaccount" className='a_link'>Create Account</Link>
                        <Link to="/" className='a_link'>Return store</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
