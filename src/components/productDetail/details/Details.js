
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Products_Cage } from '../../../data/CagesNewest';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { actions } from '../../cart/store';
import { useStore } from '../../cart/store';
import './Details.css';
import DetailSwiper from './DetailSwiper';


export default function Details({ compareParentCallback, listProductCompare }) {

    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const product = Products_Cage.find((product) => product._id === parseInt(id, 10));
    const [state, dispatch] = useStore()

    const handleAddToCart = (index, quantity) => {
        dispatch(actions.addToCart({ index, quantity }))
    }


    if (!product) {
        return <div>Product not found</div>;
    }



    //quantity


    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === "") {
            // Handle empty input by setting quantity to 1
            setQuantity(1);
        } else {
            const parsedValue = parseInt(inputValue);
            if (!isNaN(parsedValue) && parsedValue >= 1) {
                setQuantity(parsedValue);
            }
        }
    };

    if (!product) {
        return <div>Product not found</div>;
    }



    return (
        <section className="text-gray-600 body-font overflow-hidden" style={{ marginBottom: "-55px" }}>
            <div className="container px-0 py-24 mx-auto my-16">
                <div className="lg:w-1/1 mx-auto flex flex-wrap border border-grey px-6 py-12 md:mx-10 sm:mx-auto mr-8 ml-8">
                    <div className="lg:w-1/2 w-full lg:pr-5 lg:py-3 mt-3 lg:mt-0 object-cover">
                        <DetailSwiper />
                        {/* <img src={product.imagePath}/> */}
                    </div>
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-4 lg:mt-0 ">
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-3"
                            style={{ color: "#ffc519" }}
                        >
                            {product.name}
                        </h1>
                        <div class="flex mb-6 mt-12">
                            <span class="flex items-center">
                                <svg fill="none" stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                            </span>
                        </div>
                        <p class="leading-relaxed">
                            {product.description}
                        </p>
                        <div class="mt-8 items-center">
                            <div class="flex mt-6">
                                <h2 class="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Price</h2>
                                <h2 style={{ fontSize: "20px", color: "#ffc519" }}>${product.price}</h2>
                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Width</h2>
                                <h2 style={{ fontSize: "20px", color: "#ffc519" }}>{product.width}</h2>
                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Length</h2>
                                <h2 style={{ fontSize: "20px", color: "#ffc519" }}>{product.length}</h2>
                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Height</h2>
                                <h2 style={{ fontSize: "20px", color: "#ffc519" }}>{product.height}</h2>
                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-8" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Quantity</h2>
                                <button
                                    style={{
                                        width: '40px',
                                        backgroundColor: 'white',
                                        border: '1px solid #ccc',
                                        textAlign: "center"
                                    }}
                                    onClick={decreaseQuantity}
                                    type="button"
                                >
                                    <RemoveIcon />
                                </button>
                                <input
                                    id="form1"
                                    min="1"
                                    name="quantity"
                                    value={quantity}
                                    inputMode="numeric"
                                    className="form-control form-control-sm"
                                    style={{
                                        width: '80px',
                                        backgroundColor: 'white',
                                        border: '1px solid #ccc',
                                        textAlign: "center"
                                    }}
                                    onChange={handleInputChange}
                                />
                                <button
                                    style={{
                                        width: '40px',
                                        backgroundColor: 'white',
                                        border: '1px solid #ccc',
                                        textAlign: "center"
                                    }}
                                    onClick={increaseQuantity}
                                    type="button"
                                >
                                    <AddIcon />
                                </button>
                            </div>
                            <div class="flex mt-12">
                                <button
                                    onClick={() => handleAddToCart(product._id, quantity)}
                                    class='button_design'>
                                    <h3>Add to Cart</h3>
                                </button>

                                <button
                                    onClick={() => compareParentCallback(product._id)}
                                    className={listProductCompare.filter(p => p == product._id).length == 0 ? "button-compare" : "active" + " " + "button-compare"}
                                // className='button_design'>
                                >
                                    {listProductCompare.filter(p => p == product._id).length == 0 ? "Compare" : "Remove"}
                                    {console.log(listProductCompare.filter(p => p == product.id))}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}