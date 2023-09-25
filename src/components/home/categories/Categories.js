import React from 'react'
import "./Categories.css"
import { Container } from '@mui/material'

import Slogan from '../slogan/Slogan'
const backgroundColor = [
    '#e88345',
    '#d1a14e',
    '#4fd270',
    '#3369c9',
    '#e18736'
]
const categories = [
    {
        categoryImage: "https://dt-pet-care.myshopify.com/cdn/shop/files/img-1_360x.jpg?v=1613527554",
        categoryName: "Category 1"
    },
    {
        categoryImage: "https://dt-pet-care.myshopify.com/cdn/shop/files/img-5_360x.jpg?v=1613527554",
        categoryName: "Category 2"
    },
    {
        categoryImage: "https://dt-pet-care.myshopify.com/cdn/shop/files/img-2_360x.jpg?v=1613527555",
        categoryName: "Category 3"
    },
    {
        categoryImage: "https://dt-pet-care.myshopify.com/cdn/shop/files/img-3_360x.jpg?v=1613527555",
        categoryName: "Category 4"
    },
    {
        categoryImage: "https://dt-pet-care.myshopify.com/cdn/shop/files/img-4_360x.jpg?v=1613527555",
        categoryName: "Category 5"
    },
]

export default function Categories() {

    return (
        <>

            <div className='category-list'>
                {
                    categories.map(
                        (category, index) => (
                            <div className='category-item' key={index}>
                                <div className='category-box'>
                                    <img className='category-img' src={category.categoryImage} />
                                    <p className='category-name' style={{ background: `${backgroundColor[index]}` }}>{category.categoryName}</p>

                                </div>

                            </div>
                        )
                    )
                }

            </div>
        </>
    )
}
