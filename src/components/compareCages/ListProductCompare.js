import React from 'react'
import "./Compare.css"
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
export default function ListProductCompare({ compareProducts }) {

    const { cage1, cage2 } = compareProducts
    return (
        <ul className='list-compare-products'>
            <li className=''>
                <p>Compare Cages</p>
                <div className='cp-product'>
                    <p className='cp-productName'>{cage1.name}</p>
                    <p className='cp-productName'>{cage2.name}</p>
                </div>
            </li>
            <li className='compare-product'>
                <Link to={`/detail/${cage1._id}`} className='product-main-content'>
                    <div className='product-image'>
                        <img src={cage1.imagePath} />
                    </div>
                    <h3>{cage1.name}</h3>
                    <div className='product-details'>
                        <strong className='product-price'>{cage1.price}</strong>
                        <div className='product-rating'>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                        </div>

                    </div>
                </Link>
            </li>
            <li className='compare-product'>
                <Link to={`/detail/${cage2._id}`} className='product-main-content'>
                    <div className='product-image'>
                        <img src={cage2.imagePath} />
                    </div>
                    <h3>{cage2.name}</h3>
                    <div className='product-details'>
                        <strong className='product-price'>{cage2.price}</strong>
                        <div className='product-rating'>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                        </div>

                    </div>
                </Link>
            </li>
        </ul>
    )
}
