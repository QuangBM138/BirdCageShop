import React from 'react'
import { Link } from 'react-router-dom'
import './UserProfile.css'

export default function UserProfile() {
    return (
        <div className='userprofile_container'>
            <h4 className='oh_h4'>Order History</h4>
            <p className='noorder_p'>You haven't placed any orders yet.</p>
            <div className='account_detail'>
                <h4 className='accountD_h4'>Account Details</h4>
                <h5 className='nameuser_h5'>nhi nguyen</h5>
                <p className='adress_p'>Vietnam</p>
                <p className='va_p'><Link to={`/adress`} className='va_a'>View Addresses</Link></p>

            </div>
        </div>
    )
}
