import React, { useEffect, useState } from 'react'
import Details from '../components/productDetail/details/Details';
import ProductDescriptAll from '../components/productDetail/productDescriptAll/ProductDescriptAll';
import RelatedPro from '../components/productDetail/relatedProduct/RelatedPro';
import RecentlyPro from '../components/productDetail/recentlyViewed/RecentlyPro';
import Compare from '../components/productDetail/showCompare/Compare';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function ProductDetailPage() {
    const [storageListProductCompare, setStorageListProductCompare] = useState(() => JSON.parse(localStorage.getItem('listProductCompare')) ?? [])
    const [fullCompare, setFullCompare] = useState("")
    const MySwal = withReactContent(Swal)
    // console.log("storageListProductCompare: ", JSON.parse(localStorage.getItem('listProductCompare')).length)
    useEffect(() => {
        setFullCompare(storageListProductCompare.length >= 2 ? true : false)
    }, [storageListProductCompare])
    const handleDeleteProductCompare = id => {
        setStorageListProductCompare(() => {
            const newCompareProducts = storageListProductCompare.filter(p => p != id)
            localStorage.setItem("listProductCompare", JSON.stringify(newCompareProducts))
            return newCompareProducts
        })
    }

    const handleAddToCompare = (id) => {
        setStorageListProductCompare(prev_product => {
            if (fullCompare && !storageListProductCompare.find(p => p == id)) {
                MySwal.fire({
                    title: <strong>Max products for comparing</strong>,
                    icon: 'error'
                })
                return prev_product
            }
            const newCompareProducts = storageListProductCompare.find(p => p == id) ? storageListProductCompare.filter(p => p != id) : [
                ...prev_product,
                id
            ]
            localStorage.setItem("listProductCompare", JSON.stringify(newCompareProducts))
            return newCompareProducts
        })

    }
    return (
        <div style={{ backgroundColor: "white" }}>
            <Details
                fullCompare={fullCompare}
                listProductCompare={storageListProductCompare}
                compareParentCallback={handleAddToCompare} />
            <ProductDescriptAll />
            <RelatedPro
                fullCompare={fullCompare}
                listProductCompare={storageListProductCompare}
                compareParentCallback={handleAddToCompare}
            />
            {storageListProductCompare.length > 0
                &&
                <Compare
                    compareParentCallback={handleDeleteProductCompare}
                    listProductCompare={storageListProductCompare}
                />}

        </div>
    )
}
