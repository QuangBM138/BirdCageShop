import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './UserProfile.css'
import StarIcon from '@mui/icons-material/Star';



export default function UserProfile() {
    return (
        <div className='user_container'>
            <div className='user_profile'>
                <div className='user_heading'>
                    <h1>My Profile</h1>
                </div>
                <div className='user_body'>
                    <div className='user_infor'>
                        <form className='form_infor'>
                            <table className='imformation'>
                                <tr className='table_tr'>
                                    <td className='table_td_1'>
                                        <label>Fullname:</label>
                                    </td>
                                    <td className='table_td_2'>
                                        <div className='td_div_1'>
                                            <div className='td_div_name'>Nguyen Le Hong Nhi</div>
                                            <div className='td_div_score'>50.000</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='table_tr'>
                                    <td className='table_td_1'>
                                        <label>Phone Number:</label>
                                    </td>
                                    <td className='table_td_2'>
                                        <div className='td_div_2'>
                                            <div className='td_div_phone'>*********40</div>
                                        </div>

                                    </td>
                                </tr>
                                <tr className='table_tr'>
                                    <td className='table_td_1'>
                                        <label>Birthday:</label>
                                    </td>
                                    <td className='table_td_2'>
                                        <div className='td_div_3'>
                                            <input type='text' name='day' className='td_div_input' placeholder='Day' value={'00'}></input>
                                            <input type='text' name='day' className='td_div_input' placeholder='Month' value={'00'}></input>
                                            <input type='text' name='day' className='td_div_input' placeholder='Year' value={'00'}></input>
                                        </div>

                                    </td>
                                </tr>

                                <tr className='table_tr'>
                                    <td className='table_td_1'>
                                        <label></label>
                                    </td>
                                    <td className='table_td_2'>
                                        <div className='td_div_4'>


                                            <Link to={'editprofile'} className='td_link'>Edit Information</Link>
                                            <Link to={'/manageorder'} className='td_link'>Manage Order</Link>
                                            <Link to={'address'} className='td_link'>View Address</Link>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
