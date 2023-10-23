import React from 'react'
import './Adress.css'
import { Link } from 'react-router-dom'

export default function Address() {
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
                                <Link to={'addnewaddress'} >
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
                                            <div className='YD3W3V'>Hong Nhi</div>
                                        </span>
                                        <div className='xbIya3'>

                                        </div>
                                        <div className='Ayh0hN L8KYK3 IsnjAd'>
                                            0123456789
                                        </div>
                                    </div>
                                    <div className='oSiOlj'>

                                    </div>
                                </div>
                                <div className='_7lC5y1 fVHv1Z'>
                                    <div className='XBSydm DikMLj'>
                                        <div className='tiDOor'>
                                            <div className='IsnjAd'>
                                                234
                                            </div>
                                            <div className='IsnjAd'>
                                                HCMC, VN
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