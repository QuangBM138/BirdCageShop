import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserProfile.css'
import StarIcon from '@mui/icons-material/Star';



export default function UserProfile() {
    return (
        <div className='userprofile_container'>
            <div className='account_detail'>
                <h4 className='accountD_h4'>Account Details</h4>
                <div className='user_information'>
                    <h5 className='nameuser_h5'>nhi nguyen</h5>
                    <div className='user_rating'>
                        <p>Score: </p>
                        <p>500.000</p>
                    </div>
                </div>
                <p className='va_p'><Link to={`/manageorder`} className='va_a'>Manage Order</Link></p>

                <p className='va_p'><Link to={`/adress`} className='va_a'>View Addresses</Link></p>

            </div>
        </div >
    )
}
