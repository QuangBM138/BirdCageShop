import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Products_Cage } from '../../../data/Cages';
import './RelatedPro.css';

// import required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStore } from '../../cart/store';
import { actions } from '../../cart/store';


export default function RelatedPro({ compareParentCallback, listProductCompare }) {
  const [state, dispatch] = useStore()
  const handleAddToCart = (index) => {
    dispatch(actions.addToCart({ index, quantity: 1 }))
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden" >
      <div className="container px-4 mb-8 sm:px-10 py-6 sm:py-18 mx-auto">
        <h1 className="topic_title">
          Related products
        </h1>
        <div className="lg:w-1/1 mx-3 flex flex-wrap">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            loop={false}
            slidesPerView={4}
            spaceBetween={50}
          >
            {
              Products_Cage.map((product, index) =>
                <SwiperSlide className="animate product-slide" key={product.id}>
                  <div className='product-wrapper'>
                    <Link to={`/detail/${product.id}`}>
                      {JSON.parse(product.images).map((img, index) => index == 0 && <img
                        className='image-product'
                        src={img} />)}
                      <div className='overlay-product'></div>
                    </Link>
                    <div className='show-block'>
                      <Link to={`/detail/${product.id}`}>
                        <p className='name-product'>{product.name}</p>
                      </Link>
                      <button
                        className='button-cart'
                        onClick={() => handleAddToCart(product.id)}
                      >
                        <ShoppingBasketIcon /> Add to Cart
                      </button>
                      <button
                        className='button-cart'
                        onClick={() => compareParentCallback(product.id)}
                      >
                        {listProductCompare.filter(p => p == product.id).length == 0 ? "Compare" : "Remove"}
                      </button>
                    </div>

                  </div>
                </SwiperSlide>)
            }
          </Swiper>
          {/* <Swiper

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
                          <h4 className="h4_related">Adult Dogs Pedigree</h4>
                        </div>
                      </div>
                      <div className="related_cards__overlay__frame">
                        <div className='related_cards__prices'>
                          <h3>$350.00</h3>
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
            </Swiper> */}
        </div>
      </div>
    </section>
  )
}
