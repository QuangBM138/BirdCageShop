import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Details from '../components/productDetail/details/Details';
import ProductDescriptAll from '../components/productDetail/productDescriptAll/ProductDescriptAll';
import ProductDescription from '../components/productDetail/productDescription/ProductDescription';
import Reviews from '../components/productDetail/reviews/Reviews';
import RelatedPro from '../components/productDetail/relatedProduct/RelatedPro';
import RecentlyPro from '../components/productDetail/recentlyViewed/RecentlyPro';
import Modal from '../components/productDetail/modalEnquiry/Modal';

export default function ProductDetailPage () {
    return (
        <div>
            <Details />
            <ProductDescriptAll />
            <Routes>
                <Route path='/showdescription' element={<ProductDescription />}></Route>
                <Route path='/reviews' element={<Reviews />}></Route>
            </Routes>
            <Modal />
            <RelatedPro />
            <RecentlyPro />
        </div>
    )
}
