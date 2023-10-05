import React from 'react';
import './ProductDescription.css';
import { Products } from '../../../data/Products';
import { useParams } from 'react-router-dom';

export default function ProductDescription() {
    const { index } = useParams();

    const productIndex = parseInt(index, 10); // Parse the index as an integer
    const product = Products[productIndex]; // Access the product using the index

    return (
        <section className="text-gray-600 body-font overflow-hidden" >
            <div className="px-10 pb-10 mx-auto">
                <div className='show_description_border'>
                    <p>
                        <strong>
                        {product.name}
                        </strong>
                    </p>
                    <p>
                    {product.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

