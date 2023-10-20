import React, { useState } from 'react'
import Details from '../components/productDetail/details/Details';
import ProductDescriptAll from '../components/productDetail/productDescriptAll/ProductDescriptAll';
import RelatedPro from '../components/productDetail/relatedProduct/RelatedPro';
import RecentlyPro from '../components/productDetail/recentlyViewed/RecentlyPro';



export default function ProductDetailPage() {
    const [storageListProductCompare, setStorageListProductCompare] = useState(() => JSON.parse(localStorage.getItem('listProductCompare')) ?? [])
    const handleAddToCompare = (id) => {
        setStorageListProductCompare(prev_product => {
            console.log(storageListProductCompare.find(p => p == id))
            const newCompareProducts = storageListProductCompare.find(p => p == id)
                ? storageListProductCompare.filter(p => p != id)
                :
                [
                    ...prev_product,
                    id
                ]
            // const newCompareProducts = [
            //     ...prev_product,
            //     id
            // ]
            localStorage.setItem("listProductCompare", JSON.stringify(newCompareProducts))
            return newCompareProducts
        })

    }
    return (
        <div style={{ backgroundColor: "white" }}>
            <Details
                listProductCompare={storageListProductCompare}
                compareParentCallback={handleAddToCompare} />
            <ProductDescriptAll />
            <RelatedPro
                listProductCompare={storageListProductCompare}
                compareParentCallback={handleAddToCompare}
            />
        </div>
    )
}
