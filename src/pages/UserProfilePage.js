import React from 'react'
import UserProfile from '../components/userProfile/UserProfile'
import { Route, Routes } from 'react-router-dom'
import Address from '../components/address/Address'

export default function UserProfilePage() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserProfile />}></Route>
                <Route path='/address' element={<Address />}></Route>
            </Routes>
        </div>
    )
}
