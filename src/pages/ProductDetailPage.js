import React, { useEffect, useState } from 'react'
import Details from '../components/productDetail/details/Details';
import ProductDescriptAll from '../components/productDetail/productDescriptAll/ProductDescriptAll';
import RelatedPro from '../components/productDetail/relatedProduct/RelatedPro';
import Compare from '../components/productDetail/showCompare/Compare';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
    const [storageListProductCompare, setStorageListProductCompare] = useState(() => JSON.parse(localStorage.getItem('listProductCompare')) ?? [])
    const [fullCompare, setFullCompare] = useState("")
    const MySwal = withReactContent(Swal)
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/cage/${id}`)
            .then(res => res.json())
            .then(cage => {
                console.log("cage", cage);
                setProduct(cage.data.component)
            })
    }, [id])
    useEffect(() => {
        setFullCompare(storageListProductCompare.length >= 2 ? true : false)
    }, [storageListProductCompare])
    const handleDeleteProductCompare = item => {
        setStorageListProductCompare(() => {
            const newCompareProducts = storageListProductCompare.filter(p => p._id != item._id)
            localStorage.setItem("listProductCompare", JSON.stringify(newCompareProducts))
            return newCompareProducts
        })
    }

    const handleAddToCompare = (product) => {
        setStorageListProductCompare(prev_product => {
            if (fullCompare && !storageListProductCompare.find(p => p._id == product._id)) {
                MySwal.fire({
                    title: <strong>Max products for comparing</strong>,
                    icon: 'error'
                })
                return prev_product
            }
            const newCompareProducts = storageListProductCompare.find(p => p._id == product._id)
                ? storageListProductCompare.filter(p => p._id != product._id) : [
                    ...prev_product,
                    product
                ]
            localStorage.setItem("listProductCompare", JSON.stringify(newCompareProducts))
            return newCompareProducts
        })

    }
    return (
        <div style={{ backgroundColor: "white" }}>
            <Details
                product={product}
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
