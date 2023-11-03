import React, { useEffect, useState } from 'react'
import './Adress.css'
import { Link } from 'react-router-dom'
import UseToken from '../handleToken/UseToken';
import jwtDecode from 'jwt-decode';

export default function Address() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const { getToken } = UseToken()
    console.log("token", jwtDecode(getToken()).id)

    useEffect(() => {
        const userData = {
            userId: jwtDecode(getToken()).id,
            lastName,
            firstName,
            address,
            phone
        }
        fetch(`http://localhost:5000/api/v1/account/${userData.userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json()) // Parse the response as JSON
            .then((data) => {
                console.log(data);
                setFirstName(data.data.customer[0].firstName);
                setLastName(data.data.customer[0].lastName);
                setAddress(data.data.customer[0].address);
                setPhone(data.data.customer[0].account[0].phoneNumber)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [getToken]);
    return (
        <div className='Hvae38'>
            <div className='UWIOO4'>
                <div className='d2XTTX'>
                    <div className='KxkIgA'>
                        <div className='Df4Vny'>
                            My Address
                        </div>
                        <div className='VwAsdf'>

                        </div>
                    </div>
                    <div>
                        <div className='_6r5J8Y'>
                            <div >
                                <Link to={'addnewaddress'}>
                                    <div className='t9RWKn ErE1Vh'>
                                        <div>Add New Address</div>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='G-rPVC'>
                    <div className='EHan+5'>
                        <div className='GsuIol'>Address</div>
                        <div className='RnMqRZ OIBd-J'>
                            <div className='_70j3aj'>
                                <div className='_7lC5y1 fVHv1Z'>
                                    <div className='XBSydm DikMLj'>
                                        <span className='Tv2wKj uBRQwt'>
                                            <div className='YD3W3V'>{firstName} {lastName}</div>
                                        </span>
                                        <div className='xbIya3'>

                                        </div>
                                        <div className='Ayh0hN L8KYK3 IsnjAd'>
                                            {phone}
                                        </div>
                                    </div>
                                    <div className='oSiOlj'>

                                    </div>
                                </div>
                                <div className='_7lC5y1 fVHv1Z'>
                                    <div className='XBSydm DikMLj'>
                                        <div className='tiDOor'>
                                            <div className='IsnjAd'>
                                                {address}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='iI3vH9 oSiOlj'>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='td_div_4'>


                            <Link to={'/user'} className='td_link'>My Profile</Link>
                            <Link to={'editaddress'} className='td_link'>Edit Address</Link>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )

}