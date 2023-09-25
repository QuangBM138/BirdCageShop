import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDescriptAll.css'

export default function ProductDescriptAll() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container pt-8 px-10 py-0 mx-auto">
            <div className='prodcu_description_header'>
                <Link to='/showdescription' className='button_design'>Show Description</Link>
                <Link to='/reviews' className='button_design'>Review</Link>
        </div>
        </div>
        </section>
    )
}
