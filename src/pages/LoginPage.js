import React from 'react'
import Login from '../components/login/Login'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '../components/forgotPassword/ForgotPassword'
import CreateAccount from '../components/createAccount/CreateAccount'

export default function LoginPage() {
    return (
        <div>

            <Routes>
                <Route path="/login" exact element={<Login />}></Route>
                <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
                <Route path="/creataccount" element={<CreateAccount />}></Route>
            </Routes>
        </div>
    )
}
