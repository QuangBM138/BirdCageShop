import React from 'react'
import Details from '../components/productDetail/details/Details';
import ProductDescriptAll from '../components/productDetail/productDescriptAll/ProductDescriptAll';
import RelatedPro from '../components/productDetail/relatedProduct/RelatedPro';
import RecentlyPro from '../components/productDetail/recentlyViewed/RecentlyPro';



export default function ProductDetailPage () {

    return (
        <div style={{backgroundColor: "white"}}>
            <Details />
            <ProductDescriptAll />
            <RelatedPro />
             <RecentlyPro />
          
           
        </div>
    )
}
