import React from 'react'

export default function () {
    return (
        <div>
            <div className='login_container'>
                <div className='user_acount'>


                    <form className='user_signin'>
                        <div className='input_text'>
                            <input type='firstname' name='firstname' placeholder='First Name' className='email_input' />
                        </div>
                        <div className='input_text'>
                            <input type='firstname' name='lastname' placeholder='Last Name' className='email_input' />
                        </div>
                        <div className='input_text'>
                            <input type='email' name='email' placeholder='Email' className='email_input' />
                        </div>
                        <div className='input_text'>
                            <input type='password' name='email' placeholder='Password' className='password_input' />
                        </div>
                        <div className='btn_design'>
                            <button className='signin_bt'>
                                Create Account
                            </button>
                        </div>
                        <a className='return_link'>Return to store</a>
                    </form>
                </div>
            </div>
        </div>
    )
}
