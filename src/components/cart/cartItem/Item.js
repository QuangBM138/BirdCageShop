import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Item.css"
export default function Item() {
    const [quantity, setQuantity] = useState(1)
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
    return (
        <div className='cart-row'>
            <div className='cart-items'>
                <a className='cart-image'>
                    <img src='https://m.media-amazon.com/images/I/81+otqZcswL.jpg' />
                </a>
            </div>
            <div className='product-info'>
                <div className='cart-title'>
                    <h5><a className='product-title'>Bird Cage Royal</a></h5>
                    <p>Gold, Diamond, Gem</p>
                </div>
                <div className='price'>
                    <span className='money'>10000</span>
                </div>
                <div className='quantity-box'>
                    <button
                        style={{
                            height: '30px',
                            width: '30px !important',
                            color: '1ffc519',
                            background: '#fff',
                            transition: '0.7s',
                            outline: 'none',
                            border: '1px solid #e9e9e9',
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",

                        }}
                        onClick={decreaseQuantity}
                        type="button"
                    >
                        <RemoveIcon />
                    </button>
                    <input

                        min="1"
                        name="quantity"
                        value={quantity}
                        // type="text"
                        inputMode="numeric"
                        className="form-control form-control-sm quantity-input"
                        style={{
                            width: '40px',
                            height: '30px',
                            backgroundColor: 'white',
                            border: '1px solid #e9e9e9',
                            textAlign: "center",

                        }}
                        onChange={handleInputChange}
                    />
                    <button
                        style={{
                            height: '30px',
                            width: '10px !important',
                            color: '1ffc519',
                            background: '#fff',
                            transition: '0.7s',
                            outline: 'none',
                            border: '1px solid #e9e9e9',
                            borderTopRightRadius: "5px",
                            borderBottomRightRadius: "5px",
                        }}
                        onClick={increaseQuantity}
                        type="button"
                    >
                        <AddIcon />
                    </button>

                </div>

                <div className='price'>
                    <span className='cart-total'>Total: </span>
                    <span className='money'>50000</span>
                </div>
            </div>
        </div>
    )
}
