import React from 'react'
import Header from './header/Header'
import { Container } from '@mui/material'
import Item from './cartItem/Item.js'
import { useStore } from './store/hooks'
import ShoppingBasket from '@mui/icons-material/ShoppingBasket'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function Cart() {
    const [state, dispatch] = useStore()
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate("/payment")
    }
    const cart = state
    console.log(state)
    return (
        <Container style={{ minHeight: "700px" }}>


            {
                cart.length == 0 ?
                    (
                        <div className='cart-empty'>
                            <img src="https://dt-pet-care.myshopify.com/cdn/shop/t/4/assets/empty-cart.png?v=124674504766911058681621590307" />
                            <h4>No items in cart</h4>
                            <p>Add items you want to shop</p>
                            <Link to="/"
                                className='button-shopping'
                            >
                                Start shopping
                            </Link>
                        </div>
                    )
                    :
                    (
                        <div className='cart-table'>
                            <div className='cart-items'>
                                <div className='cart-row-header'>
                                    <h2>Products</h2>
                                </div>

                                {/* {
                                    cart.map(item => */}
                                <Item />
                                {/* dispatch={dispatch} */}

                                {/* )
                                } */}

                            </div>
                            <div className='cart-section'>
                                <h2
                                    style={{
                                        marginBottom: "30px"
                                    }}
                                >Order Summary</h2>

                                <p className='cart-total-price'>
                                    <span
                                        style={{
                                            fontWeight: "700",
                                            color: "#ffc519",
                                            marginRight: "20px",
                                            fontSize: "20px"
                                        }}
                                        className='cart-total-title'>Total: </span>
                                    <span
                                        style={{
                                            fontWeight: "700",
                                            color: "#ffc519",
                                            fontSize: "20px",
                                            marginBottom: "15px"
                                        }}
                                    >
                                        {cart.reduce((acc, curr) =>
                                            acc + curr.cage.price * curr.cartQuantity
                                            , 0)}$
                                    </span>
                                </p>

                                <button
                                    id='checkout'
                                    onClick={handleCheckout}
                                    style={{
                                        width: "100%",
                                        background: "#ffc519",
                                        borderRadius: "30px",
                                        borderBottom: "4px solid #8d522c",
                                        padding: "5px 25px 5px 25px",
                                        color: "#fff",
                                        fontSize: "20px",
                                        fontWeight: "400",
                                        letterSpacing: "3px",
                                        transition: "0.5s"
                                    }}

                                >Proceed to Checkout</button>
                            </div>
                        </div>
                    )
            }
        </Container >



    )
}