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
import { Products } from '../../../data/Products';
import { Link } from 'react-router-dom';

export default function BestSeller() {
    const regx = /:\[\d{3},\d{3}]/g;
  const regxQuotes = /(\"{|\\|}")/g;
  const regxCurlyBraces = /(\{)/g;
  const regxCurlyBraces2 = /(\})/g;

  const newPro = Products.map(product => {
    console.log(product.images);

    // Replace ':[' and ']' with an empty string
    product.images = product.images.replace(regx, '');

    // Replace '\"{' and '}' with '[' and ']'
    product.images = product.images.replace(regxQuotes, '[').replace(regxCurlyBraces2, ']');

    // Replace '{' with '[' and '}' with ']'
    product.images = product.images.replace(regxCurlyBraces, '[').replace(regxCurlyBraces2, ']');

    console.log(product.images);

    return product;
  });

  console.log(newPro);
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
              {Products.map((pro, index) =>
                    <SwiperSlide key={index}>
                         <Link  to={`/detail/${index}`}>
                        <div className='best_seller'>
                        <div>
                  {JSON.parse(pro.images).map(img =>
                    <img className='best_seller_img' src={img} alt={`Image ${index}`} />
                  )}
                </div>
                            <div className='best_seller_overlay'>
                                <div className="best_seller_overlay_frame">
                                    <div className='best_seller_title'>
                                        <h4 className="h4_best_seller">{pro.name.slice(0,20) + "..."}</h4>
                                    </div>
                                </div>
                                <div className="best_seller_overlay_frame">
                                    <div className='best_seller_prices'>
                                        <h3>${pro.price}</h3>
                                    </div>
                                </div>
                                <div className="best_seller_overlay_frame">
                                    <button className='button_best_design'>
                                        <ShoppingBasketIcon /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                 )}

            </Swiper>
        </div>
    );
}
