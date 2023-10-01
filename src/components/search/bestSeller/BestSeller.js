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

export default function BestSeller() {
    const images = [
        "https://salt.tikicdn.com/cache/w1200/ts/product/c6/eb/aa/17b3a771c675d3eac1619dadbe05b7c7.jpg",
        "https://www.dogfood.com.my/wp-content/uploads/2022/03/daily-diet-dog-food-1.jpg",
        "https://www.petfoodchina.com/data/watermark/20210224/6035afdc9ebd9.jpg",
        "https://catit.ca/wp-content/uploads/2019/07/Chicken-Dinners_product-1_CA_Woocommerce.jpg",
        "https://images.deliveryhero.io/image/nv/Thailand/Vendor-Ops/09012023/TH-Whiskas-Tuna-Flavour-Cat-Food-3kg-Front-View.jpg",
        "https://unisa.edu.au/siteassets/media-centre/images/media-release-images/2023/-pig_500-x-500-resized.jpg",
        "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
        "https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg",
        "https://salt.tikicdn.com/cache/w1200/ts/product/c6/eb/aa/17b3a771c675d3eac1619dadbe05b7c7.jpg",
        "https://www.dogfood.com.my/wp-content/uploads/2022/03/daily-diet-dog-food-1.jpg",
        "https://www.petfoodchina.com/data/watermark/20210224/6035afdc9ebd9.jpg",
        "https://catit.ca/wp-content/uploads/2019/07/Chicken-Dinners_product-1_CA_Woocommerce.jpg",
        "https://images.deliveryhero.io/image/nv/Thailand/Vendor-Ops/09012023/TH-Whiskas-Tuna-Flavour-Cat-Food-3kg-Front-View.jpg",
        "https://unisa.edu.au/siteassets/media-centre/images/media-release-images/2023/-pig_500-x-500-resized.jpg",
        "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
        "https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg",
    ];
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
                {images.map((img, index) => (
                    <SwiperSlide>
                        <div className='best_seller'>
                            <img className='best_seller_img' src={img} alt={`Slide ${index}`} />
                            <div className='best_seller_overlay'>
                                <div className="best_seller_overlay_frame">
                                    <div className='best_seller_title'>
                                        <h4 className="h4_best_seller">Adult Dogs Pedigree</h4>
                                    </div>
                                </div>
                                <div className="best_seller_overlay_frame">
                                    <div className='best_seller_prices'>
                                        <h3>$350.00</h3>
                                    </div>
                                </div>
                                <div className="best_seller_overlay_frame">
                                    <button className='button_best_design'>
                                        <ShoppingBasketIcon /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}
