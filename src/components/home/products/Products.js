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

const newProducts = [
    {
        name: 'Cage 1',
        image: 'https://m.media-amazon.com/images/I/81+otqZcswL.jpg'
    },
    {
        name: 'Cage 2',
        image: 'https://m.media-amazon.com/images/I/81+otqZcswL.jpg'
    },
    {
        name: 'Cage 3',
        image: 'https://m.media-amazon.com/images/I/81+otqZcswL.jpg'
    },
    {
        name: 'Cage 4',
        image: 'https://m.media-amazon.com/images/I/81+otqZcswL.jpg'
    },
    {
        name: 'Cage 5',
        image: 'https://m.media-amazon.com/images/I/81+otqZcswL.jpg'
    },
    {
        name: 'Cage 6',
        image: 'https://m.media-amazon.com/images/I/81+otqZcswL.jpg'
    },
    ,
    {
        name: 'Cage 7',
        image: 'https://m.media-amazon.com/images/I/81+otqZcswL.jpg'
    }
]

const bestProducts = [
    {
        name: 'Cage 1',
        image: 'https://m.media-amazon.com/images/I/81Vvqy6Y2-L._AC_SX679_.jpg/product20_8d6fda60-29ab-4bfb-a3c1-47d515d4a91c.jpg?v=1531469018'
    },
    {
        name: 'Cage 2',
        image: 'https://m.media-amazon.com/images/I/81Vvqy6Y2-L._AC_SX679_.jpg/product20_8d6fda60-29ab-4bfb-a3c1-47d515d4a91c.jpg?v=1531469018'
    },
    {
        name: 'Cage 3',
        image: 'https://m.media-amazon.com/images/I/81Vvqy6Y2-L._AC_SX679_.jpg/product20_8d6fda60-29ab-4bfb-a3c1-47d515d4a91c.jpg?v=1531469018'
    },
    {
        name: 'Cage 4',
        image: 'https://m.media-amazon.com/images/I/81Vvqy6Y2-L._AC_SX679_.jpg'
    },
    {
        name: 'Cage 5',
        image: 'https://m.media-amazon.com/images/I/81Vvqy6Y2-L._AC_SX679_.jpg'
    },
    {
        name: 'Cage 6',
        image: 'https://m.media-amazon.com/images/I/81Vvqy6Y2-L._AC_SX679_.jpg'
    },
    ,
    {
        name: 'Cage 7',
        image: 'https://m.media-amazon.com/images/I/81Vvqy6Y2-L._AC_SX679_.jpg'
    }
]
export default function Products() {
    const swiper = useSwiper()
    const [typeProduct, setTypeProduct] = useState('new')
    const [slideBestProductEnd, setSlideBestProductEnd] = useState(false)
    const [slideBestProductStart, setSlideBestProductStart] = useState(false)

    const [slideNewProductEnd, setSlideNewProductEnd] = useState(false)
    const [slideNewProductStart, setSlideNewProductStart] = useState(false)
    // useEffect(() => {
    //     setTransition(true)
    //     typeProduct === 'new' ? setProductListByType(newProducts) : setProductListByType(bestProducts)

    // }, [typeProduct])
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
                    slidesPerView={4}
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
                >
                    {
                        newProducts.map((product, index) =>
                            <SwiperSlide className="animate product-slide" key={index}>
                                <div className='product-wrapper'>
                                    <img className='image-product' src={product.image} />
                                    <div className='show-block'>
                                        <p className='name-product'>{product.name}</p>
                                        <button className='button-cart'>
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
                        bestProducts.map((product, index) =>
                            <SwiperSlide
                                className="animate product-slide"
                                key={index}
                            >
                                <div className='product-wrapper'>
                                    <img className='image-product' src={product.image} />
                                    <div className='show-block'>
                                        <p className='name-product'>{product.name}</p>
                                        <button className='button-cart'>
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
