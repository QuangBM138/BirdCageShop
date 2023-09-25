import React from 'react'
import { useSwiper } from 'swiper/react'

export default function SwiperButton() {
    const swiper = useSwiper()
    return (
        <div className='swiper-button-container'>
            <button className='swiper-button-prev prev' onClick={() => swiper.slidePrev()}></button>
            <button className='swiper-button-next next' onClick={() => swiper.slideNext()}></button>
        </div>
    )
}
