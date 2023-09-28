import React from 'react'
import './ProductDescriptAll.css'
import { useState } from 'react';
import ProductDescription from '../productDescription/ProductDescription';
import Reviews from '../reviews/Reviews';

export default function ProductDescriptAll() {
  const [activeButton, setActiveButton] = useState('description');

  const showDescription = () => {
    setActiveButton('description');
  };

  const showReview = () => {
    setActiveButton('review');
  };


  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className='container' style={{ margin: "0 auto" }}>
        <div className='prodcu_description_header px-10'>
          <button
            className={`button_design ${activeButton === 'description' ? 'active-button' : ''}`}
            onClick={showDescription}
          >
            <h3>Show Description</h3>
          </button>
          <button
            className={`button_design ${activeButton === 'review' ? 'active-button' : ''}`}
            onClick={showReview}
          >
            <h3>Reviews</h3>
          </button>
        </div>
        {activeButton === 'description' ? <ProductDescription /> : <Reviews />}
      </div>

    </section>
  )
}
