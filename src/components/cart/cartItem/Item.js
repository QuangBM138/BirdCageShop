import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Item.css"
import { useStore } from '../store/hooks';
import { actions } from '../store';
export default function Item({ cart, dispatch }) {
    // const [state, dispatch] = useStore()
    // const [quantity, setQuantity] = useState(1)
    const handleIncreaseQuantity = (id) => {
        dispatch(actions.increaseQuantity(id))
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(actions.decreaseQuantity(id))
    };

    // const handleInputChange = (e) => {
    //     const inputValue = e.target.value;
    //     if (inputValue === "") {
    //         // Handle empty input by setting quantity to 1
    //         setQuantity(1);
    //     } else {
    //         const parsedValue = parseInt(inputValue);
    //         if (!isNaN(parsedValue) && parsedValue >= 1) {
    //             setQuantity(parsedValue);
    //         }
    //     }
    // };
    return (
        <> {
            <div className='cart-row'>
                <div className='cart-items'>
                    <a className='cart-image'>
                        {JSON.parse(cart.images).map((img, index) => index == 0 && <img src={img} />)}
                    </a>
                </div>
                <div className='product-info'>
                    <div className='cart-title'>
                        <h5><a className='product-title'>{cart.name}</a></h5>
                        <p>Gold, Diamond, Gem</p>
                    </div>
                    <div className='price'>
                        <span className='money'>{cart.price}</span>
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
                            onClick={() => handleDecreaseQuantity(cart.id)}
                            type="button"
                        >
                            <RemoveIcon />
                        </button>
                        <input
                            min="1"
                            name="quantity"
                            value={cart.cartQuantity}

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
                            onClick={() => handleIncreaseQuantity(cart.id)}
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
        }</>

    )
}
