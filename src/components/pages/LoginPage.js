import React from 'react'
import Login from '../login/Login'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '../forgotPassword/ForgotPassword'
import CreateAccount from '../createAccount/CreateAccount'

export default function LoginPage() {
    return (
        <div>

            <Routes>
                <Route path="/" exact element={<Login />}></Route>
                <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
                <Route path="/creataccount" element={<CreateAccount />}></Route>
            </Routes>
        </div>
    )
}
