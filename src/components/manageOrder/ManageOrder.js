import React, { useEffect, useState } from 'react'
import { Products_Cage } from '../../data/CagesNewest';
import './ManageOrder.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import UseToken from '../handleToken/UseToken';

export default function ManageOrder() {
    const [status, setStatus] = useState("");
    // const [cageImage, setCageImage] = useState("");
    // const [cageName, setCageName] = useState("");
    // const [cagePrice, setCagePrice] = useState("");
    // const [total, setTotal] = useState("");
    // const { getToken } = UseToken();
    // const [orderId, setOrderId] = useState("");
    // const userId = jwtDecode(getToken()).id;
    // useEffect(() => {
    //     // Fetch the user's existing information and populate the form fields
    //     fetch(`http://localhost:5000/api/v1/order/getOrderByUser/${userId}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // console.log(data)
    //             setOrderId(data.orderByStatus.Canceled[indexedDB].id);
    //             console.log(orderId)
    //         })

    //         .catch((error) => {
    //             console.log(error);

    //         });
    //     fetch(`http://localhost:5000/api/v1/order/${orderId}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setStatus(data.data.order.status)
    //             console.log(status)
    //         })

    //         .catch((error) => {
    //             console.log(error);

    //         });
    // }, []);
    return (
        <div>
            <h4 className='oh_h4'>Order History</h4>
            <nav class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar uk-align-center">
                    <ul class="uk-navbar-nav ">
                        <li class="uk-parent"><a href="" className='active'>All Order</a></li>
                        <li class="uk-parent"><a href="">Completed</a></li>
                        <li class="uk-parent"><a href="">Pending</a></li>
                        <li class="uk-parent"><a href="">Making Products</a></li>
                        <li class="uk-parent"><a href="">Delivering</a></li>
                        <li class="uk-parent"><a href="">Cancelled</a></li>
                    </ul>
                </div>
            </nav>

            <div className='history_order_design'>
                <div className='myorder_successful'>
                    <div className='success_p'>
                        <p></p>
                    </div>
                    <div className='product_design'>
                        {Products_Cage.slice(0, 2).map((product, index) => (
                            <Link to={`/detail/${product._id}`}>
                                <div className='product_myorder' key={product._id}>

                                    <div className='product_detail'>
                                        <div className='img_product'>
                                            {/* {JSON.parse(product.imagePath).slice(0, 1).map(img => */}
                                            <img className='img_product_image' src={product.imagePath} alt={`Image ${index}`} />
                                            {/* )} */}
                                        </div>
                                        <div className='infor_product'>
                                            <p className='product_name'>{product.name}</p>
                                        </div>
                                    </div>
                                    <div className='product_price'>
                                        <span>
                                            $ {product.price}
                                        </span>
                                    </div>

                                </div>
                            </Link>
                        ))}

                    </div>
                    <div className='total'>
                        <div className='totalmoney'>
                            <div className='title_totalmoney'>Total:</div>
                            <div className='price'>$100</div>
                        </div>
                        <div className='button_grp'>
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
                        {Products_Cage.slice(7, 10).map((product, index) => (
                            <Link to={`/detail/${product._id}`}>
                                <div className='product_myorder' key={product._id}>
                                    <div className='product_detail'>
                                        <div className='img_product'>
                                            {/* {JSON.parse(product.images).slice(0, 1).map(img => */}
                                            <img className='img_product_image' src={product.imagePath} alt={`Image ${index}`} />
                                            {/* )} */}
                                        </div>
                                        <div className='infor_product'>
                                            <p className='product_name'>{product.name}</p>
                                        </div>
                                    </div>
                                    <div className='product_price'>
                                        <span>
                                            $ {product.price}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                    <div className='total'>
                        <div className='totalmoney'>
                            <div className='title_totalmoney'>Total:</div>
                            <div className='price'>$100.00</div>
                        </div>
                        <div className='button_grp'>
                            <Link to={`/detailorder`}>
                                <div>
                                    Detail Order
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
                <Link to={`/user`} className='myorder_link'><div><KeyboardBackspaceIcon /> My Profile</div></Link>
            </div>

        </div>
    )
}

