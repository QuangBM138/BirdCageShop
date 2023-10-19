// import React from 'react'
// import { Link } from 'react-router-dom'
// import './UserProfile.css'

// export default function UserProfile() {
//     return (
//         <div className='userprofile_container'>
//             <h4 className='oh_h4'>Order History</h4>
//             <p className='noorder_p'>You haven't placed any orders yet.</p>
//             <div className='account_detail'>
//                 <h4 className='accountD_h4'>Account Details</h4>
//                 <h5 className='nameuser_h5'>nhi nguyen</h5>
//                 <p className='adress_p'>Vietnam</p>
//                 <p className='va_p'><Link to={`/address`} className='va_a'>View Addresses</Link></p>

//             </div>
//         </div>
//     )
// }
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserProfile.css'
import { Products_Cage } from '../../data/Cages';



export default function UserProfile() {
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
                    {Products_Cage.slice(0,2).map((product, index) => (
                        <Link to={`/detail/${product.id}`}>
                        <div className='product_myorder' key={product.id}>
                            
                            <div className='product_detail'>
                                <div className='img_product'>
                                {JSON.parse(product.images).slice(0,1).map(img =>
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
                    {Products_Cage.slice(7,10).map((product, index) => (
                         <Link to={`/detail/${product.id}`}>
                        <div className='product_myorder' key={product.id}>
                            <div className='product_detail'>
                                <div className='img_product'>
                                {JSON.parse(product.images).slice(0,1).map(img =>
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
