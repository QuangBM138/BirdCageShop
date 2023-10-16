import React from 'react'

export default function ForgotPassword() {
    return (
        <div>
            <div className='login_container'>
                <div className='user_acount'>
                    <form className='user_signin'>
                        <div className='h1_design'>
                            <h1>Reset your password</h1>
                        </div>
                        <div className='h4_design'>
                            <h4>
                                We will send you an email to reset your password.
                            </h4>
                        </div>
                        <div className='input_text'>
                            <input type='email' name='email' placeholder='Email' className='email_input' />
                        </div>
                        <div className='btn_design_1'>
                            <button className='signin_bt'>
                                Submit
                            </button>
                            <a className='cancel_link'>Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
