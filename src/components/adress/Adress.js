import React from 'react'
import './Adress.css'
import { Link } from 'react-router-dom'

export default function Adress() {
    return (
        <div className='adress_container'>
            <div className='user_adress'>
                <section className='adress_section_small'>
                    <div>
                        <a className='add_new_address' href='/addnewaddress'>Add a New Acddress</a>
                    </div>

                    <div>
                        <a href='/' className='return_accD'>Return to Account Detail</a>
                    </div>
                </section>
                <section className='adress_section_big'>
                    <h3 className='your_address'>Your Addresses</h3>
                    <h4 className='user_name_adress'>Nhi Nguyen</h4>
                    <p className='address_detail_p'>Vietnam</p>
                    <p className='edit_delete_address'><Link to={'/editaddress'} className='edit_a_address'>Edit</Link> | <a className='delete_a_address'>Delete</a></p>
                </section>

            </div>
        </div>
    )
}
