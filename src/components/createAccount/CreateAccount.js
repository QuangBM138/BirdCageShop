import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export default function () {
    const MySwal = withReactContent(Swal)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [checkValidPhoneNum, setValidPhoneNum] = useState(true)
    const [checkValidPassword, setValidPassword] = useState(true)
    const [message, setMessage] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate()
    // on change first name
    const handleChangeFirstName = e => {
        setFirstName(e.target.value)
    }

    const handleChangeAddress = e => {
        setAddress(e.target.value)
    }

    // on change last name 
    const handleChangeLastName = e => {
        setLastName(e.target.value)
    }

    // check valid phone format
    const regexPhoneNumber = phone => {
        const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        return phone.match(regexPhoneNumber) ? true : false
    }

    //on change phone number
    const handleChangePhone = e => {
        setPhoneNumber(e.target.value.trim())
        regexPhoneNumber(e.target.value.trim()) ? setValidPhoneNum(true) : setValidPhoneNum(false)
    }

    // on change password 6 -> 20 characters
    const handleChangePassword = e => {

        (e.target.value.length < 6 || e.target.value.length > 20)
            ? setValidPassword(false)
            : setValidPassword(true)

        setPassword(e.target.value)

    }

    // sign up
    const handleCreateAccount = (e) => {
        e.preventDefault()
        if (!checkValidPhoneNum || !checkValidPassword) {
            setMessage("Phone number or password is not valid")
            return
        }
        if (!password || !phoneNumber) {
            setMessage("We need your phone number and password")
            return
        }

        fetch("http://localhost:5000/api/v1/account/signup", {
            method: "POST",
            body: JSON.stringify({
                phoneNumber,
                password,
                firstName,
                lastName
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(res => {
                setLoading(true)
                return res.json()
            })
            .then(res => {
                setLoading(false)
                if (res.status == "error") {
                    setMessage("This phone number already exists")
                }
                if (res.status == "success") {
                    MySwal.fire({
                        title: 'Account successfully created',
                        confirmButtonText: 'Login',
                    }).then(() => {
                        /* Read more about isConfirmed, isDenied below */
                        navigate('/login')
                    })
                }
            })

    }


    return (
        <div>
            <div className='login_container'>
                <div className='user_acount'>
                    <form className='user_signin'>
                        <h1 style={{ textAlign: "center" }}>Create Account</h1>
                        <div className='input_text'>
                            <input
                                value={firstName}
                                onChange={handleChangeFirstName}
                                type='text' placeholder='First Name (Optional)'
                                className='email_input' />
                        </div>
                        <div className='input_text'>
                            <input
                                value={lastName}
                                onChange={handleChangeLastName}
                                type='text' placeholder='Last Name (Optional)'
                                className='email_input' />
                        </div>
                        <div className='input_text'>
                            <input
                                value={phoneNumber}
                                onChange={handleChangePhone}
                                type='text' placeholder='Phone'
                                className='email_input' />
                            <div className='invalid-phone'>
                                {checkValidPhoneNum ? "" : "Invalid phone number format"}
                            </div>

                        </div>
                        <div className='input_text'>
                            <input
                                onChange={handleChangePassword}
                                value={password}
                                type='password'
                                placeholder='Password' className='password_input'
                            />
                            <div className='invalid-phone'>
                                {checkValidPassword ? "" : "Password must be 6-20 characters"}
                            </div>
                        </div>


                        <div
                            style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px" }}
                            className='btn_design'>
                            <button
                                style={{ display: "flex", justifyContent: "center", width: "100px" }}
                                onClick={handleCreateAccount}
                                className='signin_bt'>
                                {
                                    isLoading
                                        ? <CircularProgress style={{ width: "20px", height: "20px", color: "#fff" }} />
                                        :
                                        "Create"
                                }

                            </button>

                            <Link to="/" className='return_link'>Return to store</Link>
                        </div>
                        <div className='invalid-create'>{message}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}
