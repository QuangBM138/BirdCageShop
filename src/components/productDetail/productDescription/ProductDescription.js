import React from 'react';
import './ProductDescription.css';
import { Products_Cage } from '../../../data/CagesNewest';
import { useParams } from 'react-router-dom';

export default function ProductDescription({ product }) {
    const { id } = useParams();

    // const product = Products_Cage.find((product) => product._id === parseInt(id, 10));

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

