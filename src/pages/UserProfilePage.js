import React from 'react'
import UserProfile from '../components/userProfile/UserProfile'
import { Route, Routes } from 'react-router-dom'
import Adress from '../adress/Adress'
import AddNewAddress from '../addNewAddress/AddNewAddress'
import EditAddress from '../editAddress/EditAddress'

export default function UserProfilePage() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserProfile />}></Route>
                <Route path='/addnewaddress' element={<AddNewAddress />}></Route>
                <Route path='/editaddress' element={<EditAddress />}></Route>
                <Route path='/address' element={<Adress />}></Route>
            </Routes>
        </div>
    )
}
