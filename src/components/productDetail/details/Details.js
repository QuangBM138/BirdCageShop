import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Details.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const images = [
    {
        original: "https://pedigreeclub.ph/cdn/shop/products/1.jpg?v=1675161416",
        thumbnail: "https://pedigreeclub.ph/cdn/shop/products/1.jpg?v=1675161416",
    },
    {
        original: "https://m.media-amazon.com/images/I/81+otqZcswL.jpg",
        thumbnail: "https://m.media-amazon.com/images/I/81+otqZcswL.jpg",
    },
    {
        original: "https://i5.walmartimages.com/asr/7ae0d662-60a1-43ea-a962-9a2ce18c9d89_1.ea5f03eeacbee1dd100e44cbbfd53ee7.jpeg",
        thumbnail: "https://i5.walmartimages.com/asr/7ae0d662-60a1-43ea-a962-9a2ce18c9d89_1.ea5f03eeacbee1dd100e44cbbfd53ee7.jpeg",
    },
];

export default function Details() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-0 py-24 mx-auto">
                <div className="lg:w-1/1 mx-auto flex flex-wrap md:mx-10 sm:mx-10">
                    <div className="lg:w-1/2 w-full lg:pr-5 lg:py-3 mt-3 lg:mt-0 object-cover" >
                        <ImageGallery
                            thumbnailPosition="bottom"
                            showPlayButton={false}
                            showNav={false}
                            slideDuration={200}
                            infinite={true}
                            slideOnThumbnailOver={true}
                            thumbnailHeight={200}
                            originalHeight={500}
                            items={images}
                        />
                    </div>
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-4 lg:mt-0">
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1"
                            style={{ fontSize: "36px", color: "#ffc519" }}
                        >
                            Cats Formula Food
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
                            Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                        </p>
                        <div class="mt-6 items-center">
                            <div class="flex mt-6">
                                <h2 class="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Price</h2>
                                <h2 style={{ fontSize: "20px", color: "#ffc519" }}>$399.00</h2>
                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Color</h2>
                                <Button
                                    variant="outlined"
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderColor: '#ffc519',
                                        color: '#ffc519',
                                        marginRight: "15px",
                                        height: "30px"
                                    }}
                                >
                                    <h3 style={{ fontWeight: "bold" }}>haha</h3>
                                </Button>
                                <Button
                                    variant="outlined"
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderColor: 'black',
                                        color: 'black',
                                        marginRight: "15px",
                                        height: "30px"
                                    }}
                                >
                                    <h3 style={{fontFamily:'Poppins', fontWeight: "bold" }}>hihi</h3>
                                </Button>
                                <Button
                                    variant="outlined"
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderColor: 'black',
                                        color: 'black',
                                        marginRight: "15px",
                                        height: "30px"
                                    }}
                                >
                                    <h3 style={{ fontWeight: "bold" }}>huhu</h3>
                                </Button>
                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-14" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Brand</h2>
                                <Button
                                    variant="outlined"
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderColor: '#ffc519',
                                        color: '#ffc519',
                                        marginRight: "15px",
                                        height: "30px"
                                    }}
                                >
                                    <h3 style={{ fontWeight: "bold" }}>Royal Canin</h3>
                                </Button>

                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-11" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Flavour</h2>
                                <Button
                                    variant="outlined"
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderColor: '#ffc519',
                                        color: '#ffc519',
                                        marginRight: "15px",
                                        height: "30px"
                                    }}
                                >
                                    <h3 style={{ fontWeight: "bold" }}>Meat</h3>
                                </Button>
                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-14" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Vendor</h2>
                                <a href='#' >Pure Pet</a>
                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Type</h2>
                                <a href='#' style={{ marginLeft: "12px" }}>Cats food</a>
                            </div>
                            <div class="flex mt-6">
                                <h2 class="mr-16" style={{ fontSize: "20px", lineHeight: "30px", color: "black" }}>Size</h2>
                                <div class="relative">
                                    <select class="rounded border appearance-none border-gray-300 py-0 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-5 pr-10 ml-4">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="#ffc519" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
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
                                onClick={decreaseQuantity}>
                                    <RemoveIcon />
                                </button>
                                <input
                                    id="form1"
                                    min="1"
                                    name="quantity"
                                    value={quantity}
                                    disabled
                                    className="form-control form-control-sm"
                                    style={{
                                        width: '40px',
                                        backgroundColor: 'white',
                                        border: '1px solid #ccc',
                                        textAlign: "center"
                                    }}
                                />
                                <button style={{
                                        width: '40px',
                                        backgroundColor: 'white',
                                        border: '1px solid #ccc',
                                        textAlign: "center"
                                    }} 
                                    onClick={increaseQuantity}>
                                    <AddIcon />
                                </button>
                            </div>
                            <div class="flex mt-6">
                                <button className='button_design'>
                                    Add to Cart
                                </button>

                                <button className='button_design'>
                                    Buy it now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

