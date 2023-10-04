import React from 'react'
import Header from './header/Header'
import { Container } from '@mui/material'
import Item from './cartItem/Item.js'
import { useStore } from './store/hooks'

export default function Cart() {
    const [state, dispatch] = useStore()
    const { cart } = state
    console.log(cart.map(item => console.log(item)))
    return (
        <Container>
            <div className=''>
                <div className='cart-table'>
                    <div className='cart-items'>
                        <div className='cart-row-header'>
                            <h2>Products</h2>
                        </div>
                        {
                            cart.map(item =>
                                <Item cart={item} />
                            )
                        }

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
                                900000
                            </span>
                        </p>

                        <button
                            id='checkout'
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
            </div>
        </Container>



    )
}
