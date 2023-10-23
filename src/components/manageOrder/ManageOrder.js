import React, { useEffect, useState } from 'react'
import { Products_Cage } from '../../data/Cages';
import './ManageOrder.css'
import { Link } from 'react-router-dom';

export default function ManageOrder() {
    const [img, setImg] = useState([]);

    // Format the image data once when the component mounts or when product.images changes
    useEffect(() => {
        if (Products_Cage && Products_Cage.images) {
            const regx = /:\[\d{3},\d{3}]/g;
            const regxQuotes = /(\"{|\\|}")/g;
            const regxCurlyBraces = /(\{)/g;
            const regxCurlyBraces2 = /(\})/g;

            const formattedImages = Products_Cage.images
                .replace(regx, '')
                .replace(regxQuotes, '[')
                .replace(regxCurlyBraces2, ']')
                .replace(regxCurlyBraces, '[');

            setImg(JSON.parse(formattedImages));
        }

    }, [Products_Cage]);
    return (
        <div>
            <h4 className='oh_h4'>Order History</h4>
            <nav class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar uk-align-center">
                    <ul class="uk-navbar-nav ">
                        <li class="uk-parent"><a href="" className='active'>Completed</a></li>
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
                        <p>Successful delivery</p>
                    </div>
                    <div className='product_design'>
                        {Products_Cage.slice(0, 2).map((product, index) => (
                            <Link to={`/detail/${product.id}`}>
                                <div className='product_myorder' key={product.id}>

                                    <div className='product_detail'>
                                        <div className='img_product'>
                                            {JSON.parse(product.images).slice(0, 1).map(img =>
                                                <img className='img_product_image' src={img} alt={`Image ${index}`} />
                                            )}
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
                            <Link to={`/detail/${product.id}`}>
                                <div className='product_myorder' key={product.id}>
                                    <div className='product_detail'>
                                        <div className='img_product'>
                                            {JSON.parse(product.images).slice(0, 1).map(img =>
                                                <img className='img_product_image' src={img} alt={`Image ${index}`} />
                                            )}
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
            </div>
        </div>
    )
}

