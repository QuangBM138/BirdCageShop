import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './RelatedPro.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



export default function RelatedPro() {

  const images = [
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
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-4 sm:px-10 py-8 sm:py-18 mx-auto">
        <h1 className="topic_title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-8 text-center">
          Related products
        </h1>
          <div className="lg:w-1/1 mx-3 flex flex-wrap">
            <Swiper

              freeMode={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // Breakpoint for iPhone 
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // Breakpoint for iPad 
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // Breakpoint for Desktop
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"

            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className='related_cards'>
                    <img className='related_cards__img' src={img} alt={`Slide ${index}`} />
                    <div className='related_cards__overlay'>
                      <div className="related_cards__overlay__frame">
                        <div className='related_cards__title'>
                          <h2>Adult Dogs Pedigree</h2>
                        </div>
                      </div>
                      <div className="related_cards__overlay__frame">
                        <div className='related_cards__prices'>
                          <p>$350.00</p>
                        </div>
                      </div>
                      <div className="related_cards__overlay__frame">
                        <button className='button_design'>
                          <ShoppingBasketIcon /> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </div>
    </section>
  )
}
