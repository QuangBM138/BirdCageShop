import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Item.css"
import { useStore } from '../store/hooks';
import { actions } from '../store';
import Swal from 'sweetalert2'
export default function Item({ cart, dispatch }) {
    // const [state, dispatch] = useStore()
    // const [quantity, setQuantity] = useState(1)
    const handleIncreaseQuantity = (index) => {
        dispatch(actions.addToCart({ index, quantity: 1 }))
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(actions.decreaseQuantity(id))
    };
    const handleOnChangeQuantity = (id) => {
        dispatch(actions.onChangeQuantity(id))
    }
    const handleDeleteItem = id => {
        dispatch(actions.onDeleteItem(id))
    }

    return (
        <> {
            <div className='cart-row'>
                <span
                    onClick={() => {
                        Swal.fire({
                            title: 'Delete product',
                            text: "Do you want to delete the currently selected product?",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes'
                        })
                            .then(
                                result => {
                                    if (result.isConfirmed) {
                                        handleDeleteItem(cart.id)
                                    }
                                })

                    }}
                    className='remove-item'>X</span>
                <div className='cart-items'>
                    <a className='cart-image'>
                        {
                            JSON.parse(cart.images).map((img, index) => index == 0 && <img src={img} />)
                        }
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
                            onClick={() => cart.cartQuantity == 1 ?
                                Swal.fire({
                                    title: 'Delete product',
                                    text: "Do you want to delete the currently selected product?",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes'
                                })
                                    .then(
                                        result => {
                                            if (result.isConfirmed) {
                                                handleDecreaseQuantity(cart.id)
                                            }
                                        })
                                : handleDecreaseQuantity(cart.id)}
                            type="button"
                        >
                            <RemoveIcon />
                        </button>
                        <input
                            min="1"
                            name="quantity"
                            value={cart.cartQuantity}
                            onChange={(e) => handleOnChangeQuantity(cart.id, e.target.value)}
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
                        <span className='money'>{cart.price * cart.cartQuantity}</span>
                    </div>
                </div>
            </div>
        }</>

    )
}
