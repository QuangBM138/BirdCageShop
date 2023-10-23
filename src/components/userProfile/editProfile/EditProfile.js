import React from 'react'
import { Link } from 'react-router-dom'

export default function EditProfile() {
    return (
        <div>
            <div className='user_container'>
                <div className='user_profile'>
                    <div className='user_heading'>
                        <h1>Update Profile</h1>
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
                                            <div className='td_div_3'>
                                                <input type='text' name='day' className='td_div_input_1' placeholder='Fist Name'></input>
                                                <input type='text' name='day' className='td_div_input_1' placeholder='Last Name'></input>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='table_tr'>
                                        <td className='table_td_1'>
                                            <label>Phone Number:</label>
                                        </td>
                                        <td className='table_td_2'>
                                            <div className='td_div_2'>
                                                <input type='text' name='day' className='td_div_input_2' placeholder='Phone Number'></input>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr className='table_tr'>
                                        <td className='table_td_1'>
                                            <label>Birthday:</label>
                                        </td>
                                        <td className='table_td_2'>
                                            <div className='td_div_3'>
                                                <input type='text' name='day' className='td_div_input' placeholder='Day'></input>
                                                <input type='text' name='day' className='td_div_input' placeholder='Month'></input>
                                                <input type='text' name='day' className='td_div_input' placeholder='Year'></input>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr className='table_tr'>
                                        <td className='table_td_1'>
                                            <label></label>
                                        </td>
                                        <td className='table_td_2'>
                                            <div className='td_div_4'>


                                                <button className='td_link'>Update information</button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
