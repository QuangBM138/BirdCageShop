import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Item.css"
import { useStore } from '../store/hooks';
import { actions } from '../store';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
export default function Item({ overStockCages }) {
    const [state, dispatch] = useStore()
    const cart = state

    const [loading, setLoading] = useState(false)
    const handleIncreaseQuantity = (index) => {
        dispatch(actions.increaseQuantity({ index: index, quantity: 1 }))
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(actions.decreaseQuantity(id))
    };
    const handleOnChangeQuantity = (id, value) => {
        dispatch(actions.onChangeQuantity({ id, value }))
    }
    const handleDeleteItem = id => {
        dispatch(actions.onDeleteItem(id))
    }

    return (
        <>

            {
                cart.map(cart =>
                    <div className='cart-row' key={cart.cage._id}>
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
                                                handleDeleteItem(cart.cage._id)
                                            }
                                        })

                            }}
                            className='remove-item'>X</span>
                        <div className='cart-items'>
                            <Link to={`/detail/${cart.cage._id}`} className='cart-image'>
                                <img src={cart.cage.imagePath} />
                            </Link>
                        </div>
                        <div className='product-info'>
                            <div className='cart-title'>
                                <h5><Link to={`/detail/${cart.cage._id}`} className='product-title'>{cart.cage.name}</Link></h5>
                            </div>
                            <div className='price'>
                                <span className='money'>{cart.cage.price + "$"}</span>
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
                                                        handleDecreaseQuantity(cart.cage._id)
                                                    }
                                                })
                                        : handleDecreaseQuantity(cart.cage._id)}
                                    type="button"
                                >
                                    <RemoveIcon />
                                </button>
                                <input
                                    min="1"
                                    name="quantity"
                                    value={cart.cartQuantity}
                                    onChange={(e) => handleOnChangeQuantity(cart.cage._id, e.target.value)}
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
                                    onClick={() => handleIncreaseQuantity(cart.cage._id)}
                                    type="button"
                                >
                                    <AddIcon />
                                </button>
                                <div>{
                                    overStockCages.map(overStockCage =>
                                        <div key={overStockCage.data.data.component._id}>{
                                            overStockCage.data.data.component._id === cart.cage._id
                                                ?
                                                <span className='warning-overstock'>In Stock Now: {overStockCage.data.data.component.inStock}</span>
                                                :
                                                ""
                                        }
                                        </div>)
                                }</div>
                            </div>

                            <div className='price'>
                                <span className='cart-total'>Total: </span>
                                <span className='money'>{cart.cage.price * cart.cartQuantity + "$"}</span>
                            </div>
                        </div>
                    </div>

                )

            }

        </>

    )
}