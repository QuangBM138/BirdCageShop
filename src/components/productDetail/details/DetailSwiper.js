import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './DetailSwiper.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


export default function DetailSwiper({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  // const product = Products_Cage.find((product) => product._id === parseInt(id, 10));

  // const [img, setImg] = useState('');

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >

        {product.image.map(img => (img.imagePath.map(img =>
          <SwiperSlide >
            <img
              src={img}
              alt={product._id}
              style={{ maxWidth: '300px', maxHeight: '500px', objectFit: 'contain' }}
            />
          </SwiperSlide>
        )))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        {product.image.map(img => (img.imagePath.map(img =>
          <SwiperSlide>
            <img
              src={img}
              alt={product._id}
              style={{ maxWidth: '100px', maxHeight: '500px' }}
            />
          </SwiperSlide>
        )))}
      </Swiper>
    </div>
  );
}