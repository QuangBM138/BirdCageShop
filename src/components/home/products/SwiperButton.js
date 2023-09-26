import React from 'react'
import { useSwiper } from 'swiper/react'

export default function SwiperButton({ isEnd, isStart }) {
    const swiper = useSwiper()
    return (
        <div className='swiper-button-container'>
            {/* <button className='swiper-button-prev prev' onClick={() => swiper.slidePrev()}></button> */}
            <button className={`swiper-button-prev  prev ${isStart ? 'swiper-button-disabled' : ""}`} onClick={() => swiper.slidePrev()}></button>
            <button className={`swiper-button-next  next ${isEnd ? 'swiper-button-disabled' : ""}`} onClick={() => swiper.slideNext()}></button>
        </div>
    )
}
