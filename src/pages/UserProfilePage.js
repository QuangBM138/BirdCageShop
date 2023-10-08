import React from 'react'
import UserProfile from '../components/userProfile/UserProfile'
import { Route, Routes } from 'react-router-dom'
import Adress from '../components/adress/Adress'

export default function UserProfilePage() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserProfile />}></Route>
                <Route path='/adress' element={<Adress />}></Route>
            </Routes>
        </div>
    )
}
