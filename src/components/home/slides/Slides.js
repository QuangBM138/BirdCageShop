import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slide.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";
import slideImage from "./birdStreet.jpg"
const slides = [
    {
        slideSrc: "https://m.media-amazon.com/images/I/71um4L3dM3L.jpg"
    },
    {
        slideSrc: "https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?cs=srgb&dl=pexels-david-gonzales-2640604.jpg&fm=jpg"
    },
    {
        slideSrc: slideImage
    }

]
export default function Slides() {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
            slidesPerView={1}
            navigation
            effect={"fade"}
            loop={true}
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }}
        >
            {
                slides.map((slide, index) =>
                    <SwiperSlide key={index}>
                        <div className='image-slide' style={{ width: "100%", backgroundImage: `url(${slide.slideSrc})` }}
                        // src={slide.slideSrc}
                        ></div>
                    </SwiperSlide>)
            }


        </Swiper>
    )
}
