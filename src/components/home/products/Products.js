import React, { useEffect, useState } from 'react'
import "./Products.css"
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import SwiperButton from './SwiperButton';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { Products_Cage } from '../../../data/Cages';
import { useStore } from '../../cart/store/hooks';
import { actions } from '../../cart/store';
import { Link } from 'react-router-dom';
export default function Products() {
    const swiper = useSwiper()
    const [typeProduct, setTypeProduct] = useState('new')
    const [slideBestProductEnd, setSlideBestProductEnd] = useState(false)
    const [slideBestProductStart, setSlideBestProductStart] = useState(false)

    const [slideNewProductEnd, setSlideNewProductEnd] = useState(false)
    const [slideNewProductStart, setSlideNewProductStart] = useState(false)


    const [state, dispatch] = useStore()

    const handleAddToCart = (index) => {
        dispatch(actions.addToCart({ index, quantity: 1 }))
    }
    console.log("asdasdadssd", state)
    return (
        <div className='prodcuts-grid'>
            <div className='tabs'>
                <div
                    className='tab-link'
                    style={typeProduct === 'new' ? {
                        color: '#fff',
                        background: '#8d522c',


                    } : {}}
                    onClick={() => {
                        setTypeProduct('new')
                    }}
                >
                    New
                </div>
                <div
                    className='tab-link'
                    style={typeProduct === 'best' ? {
                        color: '#fff',
                        background: '#8d522c',


                    } : {}}
                    onClick={() => {
                        setTypeProduct('best')
                    }}
                >Best</div>
            </div>

            <div className='slide-product-wrapper'>
                <Swiper
                    className={typeProduct === 'new' ? 'animate' : ""}
                    modules={[Navigation, Pagination, Scrollbar]}

                    loop={false}
                    spaceBetween={50}
                    onBeforeInit={(swiper) => {
                        if (swiper.activeIndex == 0) setSlideNewProductStart(true)
                    }
                    }
                    onSlideChange={(swiper) => {
                        setSlideNewProductStart(swiper.isBeginning)
                        setSlideNewProductEnd(swiper.isEnd)
                    }}
                    style={typeProduct === 'new' ? { display: 'block', paddingBottom: '100px', position: 'relative' } : { display: 'none' }}
                    breakpoints={{
                        100: {
                            slidesPerView: 1
                        },
                        550: {
                            slidesPerView: 2
                        },
                        825: {
                            slidesPerView: 3,

                        },
                        1500: {
                            slidesPerView: 4,
                        }
                    }}
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
                                            <ShoppingBasket /> Add to Cart
                                        </button>

                                    </div>

                                </div>
                            </SwiperSlide>)
                    }
                    <SwiperButton
                        isEnd={slideNewProductEnd}
                        isStart={slideNewProductStart} />
                </Swiper>
                {/* best product */}
                <Swiper
                    className={typeProduct === 'best' ? 'animate' : ""}
                    modules={[Navigation, Pagination, Scrollbar]}
                    slidesPerView={4}
                    loop={false}
                    spaceBetween={50}
                    style={typeProduct === 'best' ? { display: 'block', paddingBottom: '100px', position: 'relative' } : { display: 'none' }}
                    onReachBeginning={() => setSlideBestProductStart(true)}
                    onSlideChange={(swiper) => {
                        setSlideBestProductStart(swiper.isBeginning)
                        setSlideBestProductEnd(swiper.isEnd)
                    }}
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
                                            <ShoppingBasket /> Add to Cart
                                        </button>

                                    </div>

                                </div>
                            </SwiperSlide>)
                    }
                    <SwiperButton
                        isEnd={slideBestProductEnd}
                        isStart={slideBestProductStart}
                    />
                </Swiper>
            </div>



        </div >
    )
}
