import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { actions } from '../../cart/store';
import { useStore } from '../../cart/store';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Details.css';
import DetailSwiper from './DetailSwiper';
import './DetailSwiper.css';

export default function Details({ listImages, compareParentCallback, listProductCompare, product }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [state, dispatch] = useStore()
    const { id } = useParams()

    const handleAddToCart = (index, quantity) => {
        dispatch(actions.addToCart({ index, quantity }))
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    console.log("product", product);
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

    return (
        <section className="text-gray-600 body-font overflow-hidden" style={{ marginBottom: "-55px" }}>
            <div className="container px-0 py-24 mx-auto my-16">
                <div className="lg:w-1/1 mx-auto flex flex-wrap border border-grey px-6 py-12 md:mx-10 sm:mx-auto mr-8 ml-8">
                    <div className="lg:w-1/2 w-full lg:pr-5 lg:py-3 mt-3 lg:mt-0 object-cover">
                        <DetailSwiper listImages={listImages} />

                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-4 lg:mt-0 ">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-3"
                            style={{ color: "#ffc519" }}
                        >
                            {product.name}
                        </h1>
                        <div className="flex mb-6 mt-12">
                            <span className="flex items-center">
                                <svg fill="none" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="mt-8 items-center">
                            <div className="flex mt-6">
                                <h2 className="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Price</h2>
                                <h2 style={{ fontSize: "20px", color: "#ffc519" }}>{product.price}$</h2>
                            </div>
                            <div className="flex mt-6">
                                <h2 className="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Width</h2>
                                <h2 style={{ fontSize: "20px", color: "#ffc519" }}>{product.width}</h2>
                            </div>
                            <div className="flex mt-6">
                                <h2 className="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Length</h2>
                                <h2 style={{ fontSize: "20px", color: "#ffc519" }}>{product.length}</h2>
                            </div>
                            <div className="flex mt-6">
                                <h2 className="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Height</h2>
                                <h2 style={{ fontSize: "20px", color: "#ffc519" }}>{product.height}</h2>
                            </div>
                            <div className="flex mt-6">
                                <h2 className="mr-8" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Quantity</h2>
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
                            <div className="flex mt-12">
                                <button
                                    onClick={() => handleAddToCart(
                                        {
                                            name: product.name,
                                            _id: product._id,
                                            imagePath: product.imagePath,
                                            price: product.price
                                        }, quantity
                                    )}
                                    className='button_design'>
                                    Add to Cart
                                </button>

                                <button
                                    onClick={() => compareParentCallback(product)}
                                    className={listProductCompare.filter(p => p._id == product._id).length == 0 ? "button-compare" : "active" + " " + "button-compare"}
                                // className='button_design'>
                                >
                                    {listProductCompare.filter(p => p._id == product._id).length == 0 ? "Compare" : "Remove"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}