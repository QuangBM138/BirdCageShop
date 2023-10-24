import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Products_Cage } from '../../../data/CagesNewest';
import './RelatedPro.css';

// import required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStore } from '../../cart/store';
import { actions } from '../../cart/store';


export default function RelatedPro({ compareParentCallback, listProductCompare }) {
  const [state, dispatch] = useStore()
  const [cageList, setCageList] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/cage")
      .then(res => res.json())
      .then(cage => {
        setCageList(cage.data.cages)
        // console.log(cage);
      })
  }, [])
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
              cageList.map((product, index) =>
                <SwiperSlide className="animate product-slide" key={product._id}>
                  <div className='product-wrapper'>
                    <button
                      className={listProductCompare.filter(p => p._id == product._id).length == 0 ? "button-c" : "active" + " " + "button-c"}
                      onClick={() => compareParentCallback(product)}

                    >
                      {listProductCompare.filter(p => p._id == product._id).length == 0 ? "Compare" : "Remove"}
                    </button>
                    <Link to={`/detail/${product._id}`}>

                      <img
                        className='image-product'
                        src={product.imagePath}
                      />

                      <div className='overlay-product'></div>
                    </Link>
                    <div className='show-block'>
                      <Link to={`/detail/${product._id}`}>
                        <p className='name-product'>{product.name}</p>
                      </Link>
                      <button
                        className='button-cart'
                        onClick={() => handleAddToCart(product._id)}
                      >
                        <ShoppingBasketIcon /> Add to Cart
                      </button>

                    </div>

                  </div>
                </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}