import React from 'react'
import './Login.css'
import { Link, Navigate } from 'react-router-dom'


export default function Login() {
    return (
        <div className='login_container'>
            <div className='user_acount'>


                <form className='user_signin'>
                    <div className='input_text'>
                        <input type='email' name='email' placeholder='Email' className='email_input' />
                    </div>
                    <div className='input_text'>
                        <input type='password' name='email' placeholder='Password' className='password_input' />
                    </div>
                    <div className='btn_design'>
                        <button className='signin_bt'>
                            Sign in
                        </button>
                    </div >
                    <div className='link_a'>
                        <Link to="/forgotpassword" className='a_link'>
                            Forgot Password
                        </Link>
                        <Link to="/creataccount" className='a_link'>Create Account</Link>
                        <a className='a_link'>Return store</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
