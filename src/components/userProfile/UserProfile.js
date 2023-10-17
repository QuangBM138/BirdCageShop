import React from 'react'
import { Link } from 'react-router-dom'
import './UserProfile.css'


export default function UserProfile() {
    return (
        <div className='userprofile_container'>
            <h4 className='oh_h4'>Order History</h4>
            <nav class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar uk-align-center">
                    <ul class="uk-navbar-nav ">
                        <li class="uk-parent"><a href="">All Orders</a></li>
                        <li class="uk-parent"><a href="">Waiting for pay</a></li>
                        <li class="uk-parent"><a href="">Processing</a></li>
                        <li class="uk-parent"><a href="">Delivering</a></li>
                        <li class="uk-parent"><a href="">Delivered</a></li>
                        <li class="uk-parent"><a href="">Cancelled</a></li>
                        <div class="uk-margin">
                            <form class="uk-search uk-search-default">
                                <span uk-search-icon></span>
                                <input class="uk-search-input" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </ul>
                </div>
            </nav>

            <div className='history_order_design'>
                <div className='myorder_successful'>
                    <div className='success_p'>
                        <p>Successful delivery</p>
                    </div>
                    <div className='product_design'>
                        <div className='product_myorder'>
                            <div className='product_detail'>
                                <div className='img_product'>
                                    <img src='https://m.media-amazon.com/images/I/81gYKAMky+L._AC_SY879_.jpg'></img>
                                </div>
                                <div className='infor_product'>
                                    <p className='product_name'>Prevue Hendryx SP850G/W Clean Life Cockatiel Cage, Green and White</p>
                                </div>
                            </div>
                            <div className='product_price'>
                                <span>
                                    $50.00
                                </span>
                            </div>
                        </div>
                        <div className='product_myorder'>
                            <div className='product_detail'>
                                <div className='img_product'>
                                    <img src='https://m.media-amazon.com/images/I/81gYKAMky+L._AC_SY879_.jpg'></img>
                                </div>
                                <div className='infor_product'>
                                    <p className='product_name'>Prevue Hendryx SP850G/W Clean Life Cockatiel Cage, Green and White</p>
                                </div>
                            </div>
                            <div className='product_price'>
                                <span>
                                    $50.00
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className='total'>
                        <div className='totalmoney'>
                            <div className='title_totalmoney'>Total:</div>
                            <div className='price'>$100.00</div>
                        </div>
                        <div className='button_grp'>
                            <div>
                                Reorder
                            </div>
                            <Link to={`/detailorder`}>
                                <div>
                                    Detail Order
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='myorder_successful'>
                    <div className='success_p'>
                        <p>Successful delivery</p>
                    </div>
                    <div className='product_design'>
                        <div className='product_myorder'>
                            <div className='product_detail'>
                                <div className='img_product'>
                                    <img src='https://m.media-amazon.com/images/I/81gYKAMky+L._AC_SY879_.jpg'></img>
                                </div>
                                <div className='infor_product'>
                                    <p className='product_name'>Prevue Hendryx SP850G/W Clean Life Cockatiel Cage, Green and White</p>
                                </div>
                            </div>
                            <div className='product_price'>
                                <span>
                                    $50.00
                                </span>
                            </div>
                        </div>
                        <div className='product_myorder'>
                            <div className='product_detail'>
                                <div className='img_product'>
                                    <img src='https://m.media-amazon.com/images/I/81gYKAMky+L._AC_SY879_.jpg'></img>
                                </div>
                                <div className='infor_product'>
                                    <p className='product_name'>Prevue Hendryx SP850G/W Clean Life Cockatiel Cage, Green and White</p>
                                </div>
                            </div>
                            <div className='product_price'>
                                <span>
                                    $50.00
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className='total'>
                        <div className='totalmoney'>
                            <div className='title_totalmoney'>Total:</div>
                            <div className='price'>$100.00</div>
                        </div>
                        <div className='button_grp'>
                            <div>
                                Reorder
                            </div>
                            <Link to={`/detailorder`}>
                                <div>
                                    Detail Order
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className='account_detail'>
                <h4 className='accountD_h4'>Account Details</h4>
                <h5 className='nameuser_h5'>nhi nguyen</h5>
                <p className='adress_p'>Vietnam</p>
                <p className='va_p'><Link to={`/address`} className='va_a'>View Addresses</Link></p>

            </div>

            {/* <p className='noorder_p'>You haven't placed any orders yet.</p> */}
            <div className='account_detail'>
                <h4 className='accountD_h4'>Account Details</h4>
                <h5 className='nameuser_h5'>nhi nguyen</h5>
                <p className='adress_p'>Vietnam</p>
                <p className='va_p'><Link to={`/address`} className='va_a'>View Addresses</Link></p>

            </div>
        </div >
    )
}
