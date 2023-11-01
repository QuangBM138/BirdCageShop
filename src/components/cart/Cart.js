import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import Item from './cartItem/Item.js'
import { useStore } from './store/hooks'
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import UseToken from "../handleToken/UseToken.js";
import jwtDecode from 'jwt-decode'
import CustomItem from './cartItem/CustomItem.js'
export default function Cart() {
    const [state, dispatch] = useStore()
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const { getToken } = UseToken()
    const [overStockCages, setOverStockCages] = useState([])
    const [deletedCages, setDeletedCages] = useState([])
    const [customCageList, setCustomCageList] = useState([])
    const [component, setComponent] = useState([])
    const [price, setPriceCageCustom] = useState(0)
    useEffect(() => {
        if (getToken() != null) {
            fetch("http://localhost:5000/api/v1/cage/customCages/" + jwtDecode(getToken()).id, {
                method: "GET",
                contentType: 'application/json',
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            })
                .then(res => res.json())
                .then(cageComponents => {
                    console.log(cageComponents);
                    const cageComponentsList = cageComponents.map(i => i[0].cage[0])

                    if (cageComponentsList.find(i => i.status == "CUS")) {
                        setPriceCageCustom(cageComponentsList.find(i => i.status == "CUS").price)
                    }

                    console.log(cageComponents[0][0].component);
                    if (cageComponentsList.find(i => i.status == "Done")) {
                        setCustomCageList([])
                    }
                    console.log(cageComponentsList.find(i => i.status == "Pending"))
                    if (cageComponentsList.find(i => i.status == "Pending")) {

                        setCustomCageList(cageComponentsList.find(i => i.status == "Pending"))
                    }

                    Promise.all(
                        cageComponents[0][0].component.map(c =>
                            new Promise(res => res(fetch("http://localhost:5000/api/v1/component/" + c._id))
                            ).then(res => res.json())
                        )

                    )
                        .then(data => {
                            console.log(data)
                            setComponent(data)
                        })

                })
                .catch(err => console.log(err))
        }


    }, [])
    const handleCheckout = () => {
        if (getToken() == null) { navigate('/login', { state: { previousPath: pathname } }) }
        else {
            setOpen(true)
            Promise.all(
                state.map(item =>
                    new Promise(res =>
                        res(fetch("http://localhost:5000/api/v1/cage/" + item.cage._id))
                    )
                        .then(res => res.json())
                        .then(data => ({ data: data, cartQuantity: item.cartQuantity }))
                )
            )
                .then(res => {
                    const overStockList = res.filter(item => item.cartQuantity > item.data.data.component.inStock)
                    const deletedCageList = res.filter(item => item.data.data.component.delFlg === true)
                    console.log("resposne cart: ", res)


                    setTimeout(() => {
                        setOverStockCages(overStockList)
                        setDeletedCages(deletedCageList)
                        setOpen(false)
                        if (overStockList.length === 0) navigate('/payment')
                    }, 3000)

                })
        }
    }

    const cart = state
    return (
        <Container style={{ minHeight: "50vh" }}>
            {open ? <div>

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <div className='box-loading-check'>
                        <Button>Checking Stock</Button>
                        <CircularProgress color="inherit" />

                    </div>

                </Backdrop>
            </div> : ""}

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
                                    {cart.length != 0 && <>
                                        <h2>Products</h2>
                                        <Item
                                            deletedCages={deletedCages}
                                            overStockCages={overStockCages} />
                                    </>}
                                </div>


                                <div className='cart-row-header'>
                                    <h2>Custom Cage</h2>
                                </div>
                                <CustomItem
                                    component={component}
                                    customCageList={customCageList}
                                />


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
                                        {price == 0 ?
                                            cart.reduce((acc, curr) =>
                                                acc + curr.cage.price * curr.cartQuantity
                                                , 0) : cart.reduce((acc, curr) =>
                                                    acc + curr.cage.price * curr.cartQuantity
                                                    , price)}

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