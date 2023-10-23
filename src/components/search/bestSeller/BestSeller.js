import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './BestSeller.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Products_Cage } from '../../../data/CagesNewest';
import { Link } from 'react-router-dom';
import { useStore } from '../../cart/store';
import { actions } from '../../cart/store';


export default function BestSeller() {
    const [quantity, setQuantity] = useState(1);

    const [state, dispatch] = useStore();

    const handleAddToCart = (index, quantity) => {
        dispatch(actions.addToCart({ index, quantity }))
    }


    return (
        <div className='container-bs'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                {Products_Cage.map((pro, index) =>
                    <SwiperSlide key={index}>
                       
                            <div className='best_seller'>
                            <Link to={`/detail/${pro._id}`}>
                                <div>
                                        <img className='best_seller_img' src={pro.imagePath} alt={`Image ${pro.name}`} />
                                </div>
                                </Link>
                                <div className='best_seller_overlay'>
                                    <div className="best_seller_overlay_frame">
                                        <div className='best_seller_title'>
                                            <h4 className="h4_best_seller">{pro.name.slice(0, 20) + "..."}</h4>
                                        </div>
                                    </div>
                                    <div className="best_seller_overlay_frame">
                                        <div className='best_seller_prices'>
                                            <p className='price-product'>{pro.price}</p>
                                        </div>
                                    </div>
                                    <div className="best_seller_overlay_frame">
                                        <button 
                                        className='button_best_design'
                                        onClick={() => handleAddToCart(pro._id, quantity)}>
                                            <ShoppingBasketIcon /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
}
